from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
import openai
from fastapi.staticfiles import StaticFiles



app = FastAPI()



app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


import nltk
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')
stop_words = set(stopwords.words('english'))
lemmatizer = WordNetLemmatizer()


openai.api_key = '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'

@app.post("/recette")
async def process_query(query: dict):
    try:
       
        user_query = query.get("query", "")
        tokens = word_tokenize(user_query)
        tokens = [lemmatizer.lemmatize(token) for token in tokens if token.isalnum() and token.lower() not in stop_words]
        preprocessed_query = ' '.join(tokens) + " should be Tunisian recipe"

      
        response = openai.Completion.create(
            engine="text-davinci-002",
            prompt=preprocessed_query,
            max_tokens=100
        )

       
        recette = response.choices[0].text.strip()

       
        return JSONResponse(content={"recette": recette})

    except Exception as e:
        
        raise HTTPException(status_code=500, detail=str(e))
