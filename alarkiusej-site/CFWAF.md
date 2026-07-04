### CF Rules
search crawlers allowed 

but AI Training Bots are not allowed.

(http.request.uri.path ne "/robots.txt" and
 not (http.user_agent contains "Googlebot") and
 not (http.user_agent contains "bingbot") and
 not (http.user_agent contains "PerplexityBot") and
 (
   (http.user_agent contains "GPTBot") or
   (http.user_agent contains "OAI-SearchBot") or
   (http.user_agent contains "ChatGPT-User") or
   (http.user_agent contains "CCBot") or
   (http.user_agent contains "ClaudeBot") or
   (http.user_agent contains "anthropic-ai") or
   (http.user_agent contains "Google-Extended") or
   (http.user_agent contains "Applebot-Extended") or
   (http.user_agent contains "Bytespider") or
   (http.user_agent contains "DeepSeekBot") or
   (http.user_agent contains "Diffbot") or
   (http.user_agent contains "AI2Bot") or
   (http.user_agent contains "cohere-ai") or
   (http.user_agent contains "TerracottaBot") or
   (http.user_agent contains "FacebookBot") or
   (http.user_agent contains "meta-externalagent")
 )
)
