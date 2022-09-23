<header class="relative w-full px-8 pt-8 flex flex-row justify-between items-end z-10">
	<a href="/"><h1 class="">LOGO</h1></a>

	<nav class="md:flex hidden">
		<ul class="list-reset md:flex md:items-center">
			<li class="md:ml-4"><a href="/projects">Projects</a></li>
			<li class="md:ml-4"><a href="/education">Education</a></li>
			<li class="md:ml-4"><a href="/technology">Technology</a></li>
			<li class="md:ml-4"><a href="/connect">Connect</a></li>
		</ul>
	</nav>
</header>

<main class="m-10 h-screen grid-rows-auto flex justify-center">
	<slot />
</main>

<footer class="w-full flex justify-center ">
	<p class="mb-4 text-xs">
		ALL IMAGES COPYRIGHT ©
		<a href="http://www.danlubbers.com" target="_blank" rel="noreferrer"> DAN LUBBERS </a> | SITE
		BUILT BY
		<a href="http://www.danlubbers.com" target="_blank" rel="noreferrer"> DAN LUBBERS </a>
	</p>
</footer>
