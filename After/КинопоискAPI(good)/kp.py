import requests

API_KEY = "YW9PKZM-NAKM1KC-P2NAABR-QXHQCHF"

def get_random_movie():
  url = "https://api.kinopoisk.ru/api/v2.2/films/random"
  headers = {
    "X-API-Key": API_KEY,
  }

  response = requests.get(url, headers=headers)

  if response.status_code == 200:
    data = response.json()
    return data["data"]
  else:
    return None

movie = get_random_movie()

print(movie["title"])
