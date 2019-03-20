let environment = "production"

if(window.location.hostname === "localhost") {
  environment = "localhost"
}

let CLIENT_URL = ""

if(environment === "localhost") {
  CLIENT_URL = "http://localhost:3001"
} else {
  CLIENT_URL = "https://the-giving-list.herokuapp.com/"
}

export { CLIENT_URL }