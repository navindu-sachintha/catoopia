<br/>
<div align="center">
<h3 align="center">Catoopia 😻</h3>
<p align="center">
Simple Next JS application with <a href="https://docs.thecatapi.com/">CAT API</a>
<br/>

</div>

 ## About The App

This application retives data from cat api and provide detailed information about cats.
 ### Built With


- [Next](https://nextjs.org)
- [React](https://reactjs.org)
- [Tailwind](https://tailwindcss.com)

 ## Getting Started

 ### Prerequisites

You need `Docker` installed in your machine.
 ### Installation


1. Get a free API Key at [CAT API](https://docs.thecatapi.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/navindu-sachintha/catoopia.git
   ```
3. cd into project
   ```sh
   cd catoopia
   ```
4. Enter your API in `.env.example` and rename it to `.env.local`
   ```yaml
   NEXT_PUBLIC_CAT_API_KEY=<YOUR_API_KEY>
   ```
5. Update `docker-compose.yml` file with your API key
   ```yml
   environment:
      - NEXT_PUBLIC_CAT_API_KEY=${YOUR_API_KEY}
   ```
6. Run your app on docker
   ```sh
   docker compose up --build
   ```

