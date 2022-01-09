async function register ()
{
	if (navigator.serviceWorker)
	{
		await navigator.serviceWorker.register("./sw.js").catch(e => console.log(e))
	}
}

async function main ()
{
 await register()
}

window.addEventListener("load", main)