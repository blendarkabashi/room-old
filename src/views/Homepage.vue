<template>
	<div class="random">

		<div class="header-section">
			<div class="top-shapes"></div>
		</div>

		<div class="top-section container">
			<div class="header-text">
				<p class="main-text">Find your room</p>
				<p class="secondary-text">Lorem ipsum dolor sit amet consectetur adipiscing elit massa dignissim
					sapien,
					congue primis fringilla natoque in lacus penatibus quam cras magna, nascetur blandit metus orci
					diam
					porta mi sodales auctor. Quam ultricies facilisi leo rutrum tincidunt donec commodo ante
					fermentum,
					posuere magna sem.</p>
			</div>
		</div>

		<div class="main-section container">
			<p class="title">ROOMS</p>

			<div class="loading-container" v-if="loading">
				<h1 class="loading-text">LOADING...</h1>
			</div>
			<div class="grid" v-else>
				<single-apartment v-for="(apartment,index) in apartments" :key="index" :flatInfo="apartment">
				</single-apartment>
			</div>
		</div>
	</div>
</template>

<script>
	import SingleApt from '../components/SingleAptComponent'
	import {
		mapGetters
	} from 'vuex'

	export default {

		data() {
			return {
				loading: true,
				apartments: [],
			}
		},
		components: {
			'single-apartment': SingleApt,
		},
		methods: {
			async fetchApartments() {
				await this.axios.get('/flats')
					.then(response => {
						this.apartments = response.data
						console.log(this.apartments)
						this.loading = false
					})
					.catch(error => {
						console.log(error)
					})
			},
		},
		computed: {
			...mapGetters(['isLoggedIn']),
		},
		mounted() {
			this.fetchApartments()
		}
	}
</script>

<style lang="scss">
	@import '../assets/styles/_variables.scss';

	.scale-enter-active,
	.scale-leave-active {
		transition: all .5s
	}

	.scale-enter,
	.scale-leave-to {
		opacity: 0;
		transform: scale(0);
	}

	.header-section {
		z-index: -1;
		position: relative;
		width: 100%;
		height: 550px;

		.top-shapes {
			position: absolute;
			height: 100%;
			width: 100%;
			background: url('../assets/images/menu-header.svg');
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
		}
	}

	.header-text {
		margin-top: -80px !important;

		.main-text {
			font-size: 58px;
			font-weight: bold;
			text-align: center;
			margin: 0;
			color: $text-color;
		}

		.secondary-text {
			font-size: 18px;
			text-align: center;
			color: $text-color;
		}
	}

	.main-buttons {

		ul {
			display: flex;
			justify-content: center;
			list-style: none;
			padding: 0;
			backface-visibility: hidden !important;

			a {
				background: $main-color;
				height: 55px;
				width: 200px;
				border-radius: 35px;
				text-align: center;
				line-height: 55px;
				margin-right: 26px;
				text-decoration: none;
				transition: all 0.3s;
				backface-visibility: hidden !important;

				&.newPostButton{
					height: unset;
					width: unset;
					padding:0px 25px;
					
				}

				&:hover {
					background: rgb(255, 76, 76);
					backface-visibility: hidden;
					transform: scale(1.07);
				}

				&:last-child {
					margin-right: 0px;
				}

				li {
					color: white;
					font-size: 22px;
					text-decoration: none;
					height: 100%;
				}
			}
		}
	}

	.main-section {
		padding-top: 80px;
		padding-bottom: 80px;

		.title {
			font-size: 42px;
			color: $text-color;
			font-weight: bold;
		}

		.grid {
			display: grid;
			grid-template-columns: 245px 245px 245px 245px;
			grid-row-gap: 50px;
			grid-column-gap: 30px;
		}
		.loading-container{
			.loading-text{
				color:$text-color;
				text-align: center;
				transition: opacity 0.5s ease-out;
			}
		}
	}

	.flicker{
		opacity:0;
	}
</style>