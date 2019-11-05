<template>
	<Layout>
		<div id="hero" class="h-screen bg-black text-white bg-cover bg-center mb-20 hidden sm:block"></div>
		<div id="hero-mobile" class="h-screen sm:hidden bg-no-repeat bg-black text-white bg-contain bg-center mb-20"></div>
		<div id="about" class="block sm:block lg:flex bg-fixed">
			<div class="lg:w-2/4 sm:w-full lg:px-20 sm:px-10 text-gray-800 ">
				<g-image src="~/assets/images/marcus-battle-headshot.jpg" />
			</div>
			<div class="w-full lg:w-2/4 p-20">
				<h2 class="text-3xl font-extrabold text-gray uppercase mb-10">Before you quit, Pray.</h2>
				<p class="mb-8">It's frustrating to ask people around you for answers they don't have. It's even more frustrating to finally get enough strength to pray and not know what say.</p>
				<p class="mb-8">Men need information to fuel their prayers. Without it we're destroyed for our lack of knowledge. I believe that when "we don't know what to pray for" we don't pray. When we don't pray we make quitting an attractive option. What would your prayers to God look like if you finally had the answers you've been looking for?</p>
				<p class="mb-8">Could you actually get closer to God if someone taught you about your mind, money and faith? Of course! This isn't about attending a church building. Men Pray is a reminder to choose prayer over quitting and the tools you need to finally succeed.</p>
			</div>
			
		</div>
		<div id="location" class="block bg-cover bg-fixed text-white p-20 text-center">
			<div class="lg:w-2/4 mx-auto block">
				<h2 class="text-3xl font-extrabold text-gray uppercase mb-10">Registration is FREE</h2>
				<p class="mb-8">Men Pray.&trade; is a monthly life skills men's conference hosted by <a href="https://www.facebook.com/marcusdbattle">Marcus Battle</a>. It's purpose is to help men who are looking for direction in life to find it in Jesus Christ and learn how to ask for his help, every day.</p>
				<p class="mb-8">The first conference will take place in Greensboro, NC on Saturday, December 7th, 2019 from Noon to 2PM at an undisclosed location. <span class="bg-yellow-400 text-black">The conference is FREE but registration is required.</span> Location will be provided to attendees after registration. (Hint: It's not at church)</p>
				<a class="bg-yellow-400 hover:bg-black hover:text-white text-black px-10 py-3 inline-block mx-auto cursor-pointer" href="https://forms.gle/bWzboTZvc2dnHhXe8">Register Now</a>
			</div>
		</div>
		<div id="footer" class="p-20 bg-black text-gray-400 text-center">
			<h2 class="mb-10 text-3xl">Need prayer? Text <span class="text-yellow-400">336-542-5971</span></h2>
			<p><span class="text-lato uppercase text-white">Men Pray.</span> is a trademark of <a href="https://www.facebook.com/marcusdbattle">Marcus Battle</a>. Copyright &copy; 2019. All rights servered. </p>
		</div>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		// title: 'Men Pray'
	}
}
</script>

<style>
	#hero {
		background-image: url(~@/assets/images/men-pray-hero-dec-2019.jpg);
	}
	#hero-mobile {
		background-image: url(~@/assets/images/men-pray-hero-dec-2019-mobile.jpg);
	}
	#marcus-battle {
		background-image: url(~@/assets/images/marcus-battle-headshot.jpg);
	}
	#location {
		background-image: url(~@/assets/images/hero-bg-the-bearded-goat.jpg);
	}

	.home-links a {
		margin-right: 1rem;
	}
</style>
