const url = 'http://newsapi.org/v2/everything?' +
'q=Coronavirus&' +
'language=en&' +
'sortBy=publishedAt&' +
'apiKey=61df11d38359476d9f2b3b97683be72e';

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}