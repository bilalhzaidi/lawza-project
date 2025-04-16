package api

import (
    "bytes"
    "encoding/json"
    "io/ioutil"
    "net/http"
    "os"
    "fmt"
)

type OpenAIRequest struct {
    Model    string `json:"model"`
    Messages []struct{
        Role    string `json:"role"`
        Content string `json:"content"`
    } `json:"messages"`
    MaxTokens int     `json:"max_tokens"`
    Temperature float64 `json:"temperature"`
}

func GenerateDocumentWithOpenAI(prompt string) (string, error) {
    oaiReq := &OpenAIRequest{
        Model: "gpt-4o",
        MaxTokens: 1800,
        Temperature: 0.3,
        Messages: []struct{
            Role string `json:"role"`
            Content string `json:"content"`
        }{
            {Role: "system", Content: "You are a retired Judge of the Supreme Court of Pakistan ..."},
            {Role: "user", Content: prompt},
        },
    }
    j, _ := json.Marshal(oaiReq)
    req, _ := http.NewRequest("POST", "https://api.openai.com/v1/chat/completions", bytes.NewBuffer(j))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("OPENAI_API_KEY"))
    resp, err := http.DefaultClient.Do(req)
    if err != nil { return "", err }
    defer resp.Body.Close()
    b, _ := ioutil.ReadAll(resp.Body)
    var data map[string]interface{}
    json.Unmarshal(b, &data)
    content := data["choices"].([]interface{})[0].(map[string]interface{})["message"].(map[string]interface{})["content"].(string)
    return content, nil
}