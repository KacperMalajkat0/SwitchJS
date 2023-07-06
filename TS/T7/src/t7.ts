import fetch from 'node-fetch';

interface ApiResponse {
    data: any;
    error: string | null;
}
  
async function fetchData(url: string): Promise<ApiResponse> {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return { data, error: null };
    } catch (error) {
      return { data: null, error: error.message };
    }
}
  
async function main() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const { data, error } = await fetchData(url);
  
    if (error) {
      console.error(`Error fetching data: ${error}`);
      return;
    }
  
    console.log(`Data: ${JSON.stringify(data)}`);
}
  
main();