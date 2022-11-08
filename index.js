// Fetch GET Implementation
// Gets Discord user details from Discord API
async function getUser(discordId) {
	// API Endpoint
	const url = 'https://ellie-bot.fortnite.ca/api/pokemons/?ownerId=' + discordId;
	const response = await fetch(url, {
	  method: 'GET',
	  headers: {
		Accept: 'application/json',
	  },
	  redirect: 'follow',
	});
	if (response.ok) {
	  return await response.json();
	} else {
	  throw await response.json();
	}
  }
  async function start(){
	const response = await getUser("931255035277475853")
	console.log(response)
	const h2username = document.getElementById("username")
	const username = response.owner.username
	console.log(username)
	h2username.innerText = username
  }

  start()

  

  
