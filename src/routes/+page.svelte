<script>
	import Recommendations from '$lib/components/Recommendations.svelte';
	import SEO from '$lib/components/SEO.svelte';

	const pageTitle = 'Dan Lubbers | Web Developer';
	const metadescription = 'Dan Lubbers is a Web Developer, Photographer, & Retoucher';
	const siteLanguage = 'en';
</script>

<SEO {pageTitle} {metadescription} {siteLanguage} />

<div class="flex flex-col">
	<p>
		Dan Lubbers is a Full stack web developer with 17+ years of experience photographing and
		retouching in the studio commercial, editorial and outdoor gear industries. Collaborated with
		highly satisfied clients to meet their exact needs and exceed expectations.
	</p>
	<br />
	<p>
		Dan got his start with Extreme Sports Photography when he was the sole photographer on the
		<a
			href="https://www.sportiva.com/"
			aria-label="La Sportiva"
			target="_blank"
			rel="noopener noreferrer"
		>
			La Sportiva
		</a>
		Solutions Climbing Tour in 2007. Dan went on to work in
		<a
			href="https://www.amazon.com/watches/s?k=watches"
			aria-label="Amazon Watches"
			target="_blank"
			rel="noopener noreferrer"
		>
			Amazon&apos;s Largest Photo Studio
		</a>
		as a Digital Technician, Retoucher & Photographer for the Jewelry and Watch department. He was the
		lead retoucher for the 2018 AD campaign for
		<a
			href="https://www.tempurpedic.com/"
			aria-label="Tempurpedic"
			target="_blank"
			rel="noopener noreferrer"
		>
			Tempurpedic.
		</a>
		Wanting to add more to his career and an interest in Web Development led him to Utah, to take a 3
		month intensive Full Stack Bootcamp at
		<a
			href="https://devmountain.com/"
			aria-label="DevMountain Bootcamp"
			target="_blank"
			rel="noopener noreferrer"
		>
			DevMountain
		</a>
		. After graduating
		<a
			href="https://devmountain.com/"
			aria-label="DevMountain Bootcamp"
			target="_blank"
			rel="noopener noreferrer"
		>
			DevMountain,
		</a>
		Dan moved to Upstate NY where he found
		<a
			href="https://albanycancode.org/"
			aria-label="AlbanyCanCode Bootcamp"
			target="_blank"
			rel="noopener noreferrer"
		>
			AlbanyCanCode
		</a>
		and was able to refine his Javascript skills even further. In May 2020, Dan was contracted as a Front-End
		React Software Engineer with a small team building an end-to-end app for a Healthcare Company called
		<a
			href="https://app.psilife.com/"
			aria-label="Psi Healthcare"
			target="_blank"
			rel="noopener noreferrer"
		>
			Psī.
		</a>
		In 2022, Dan worked on his personal data from
		<a
			href="https://ouraring.com/"
			aria-label="Oura Ring"
			target="_blank"
			rel="noopener noreferrer"
		>
			Ōura Ring,
		</a>
		( a healthcare tracking device) combining his Ōura data with additional external data to personalize
		his own metrics for optimal health balance for sleep. In Nov. 2022, Dan joined a new startup,
		<a
			href="https://github.com/existential-engineering"
			aria-label="existential engineering"
			target="_blank"
			rel="noopener noreferrer"
		>
			"Existential Engineering."
		</a>
	</p>
	<br />
	<p class="text-center">
		Psychology | Meditation | Yoga | BreathWork | Photography | Retouching | Backpacking | Hiking |
		Snowshoeing | Cortados | Asian Food
	</p>
	<p class="mt-10 pb-10 sm:pb-0 text-center">
		&quot;Life is too short not to create something with every breath we draw.&quot; ~ Maynard James
		Keenan
	</p>
	<Recommendations />
</div>
