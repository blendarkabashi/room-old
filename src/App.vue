<template>
	<div id="app">

		<login-modal @close="toggleLoginModal" @switchModal="switchModal" v-show="isLoginModalShown"></login-modal>
		<register-modal @close="toggleRegisterModal" @switchModal="switchModal" v-show="isRegisterModalShown"></register-modal>

		<transition name="fade-out" appear>
			<div class="navbar-container" v-if="isLoggedIn">
				<div class="dummy-element"></div>
				<ol class="navbar">
					<nav class="active-slider-holder">
						<router-link @click.native="activeElement1" to="/">Rooms</router-link>
						<router-link @click.native="activeElement2" to="/apartment">Apartment</router-link>
						<router-link @click.native="activeElement3" to="">About</router-link>
						<div id="active-slider"></div>
					</nav>
				</ol>
				<div class="profile-submenu-container" href="javascript:void(0)">
					<div class="profile-submenu" @click="toggleSubmenu">
						<div class="profile-holder">
							<div class="profile" :style="{ backgroundImage: 'url(' + user.Avatar + ')' }"></div>
						</div>
						<p> {{user.FullName}} <span class="caveat-down"></span> </p>
					</div>
					<div class="profile-dropdown" id="submenuDropdown">
						<ol class="submenu-links">
							<a href="" class="submenu-link">My Profile</a>
							<a href="" class="submenu-link">Settings</a>
							<a href="" class="submenu-link" @click.prevent="logout">Logout</a>
						</ol>
					</div>
				</div>
			</div>
			<div class="navbar-container auth-buttons" v-else>
				<ol class="auth-list">
					<a href="javascript:void(0)" @click="toggleRegisterModal" class="auth-button">
						<li>Register</li>
					</a>
					<a href="javascript:void(0)" @click="toggleLoginModal" class="auth-button">
						<li>Login</li>
					</a>
				</ol>
			</div>
		</transition>

		<transition name="fade-out" appear>
			<router-view></router-view>
		</transition>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import loginModal from '../src/components/LoginComponent.vue'
	import registerModal from '../src/components/RegisterComponent.vue'

	export default {
		data() {
			return {
				isLoginModalShown: false,
				isRegisterModalShown: false,
			}
		},
		methods: {
			activeElement1() {
				var element = document.getElementById('active-slider')
				element.style.left = '0%'
			},
			activeElement2() {
				var element = document.getElementById('active-slider')
				element.style.left = '33.33%'
			},
			activeElement3() {
				var element = document.getElementById('active-slider')
				element.style.left = "66.6%";
			},
			toggleSubmenu() {
				document.getElementById('submenuDropdown').classList.toggle('show')
			},
			logout() {
				this.$store.dispatch('logout')
			},
			toggleLoginModal() {
				this.isLoginModalShown = !this.isLoginModalShown
			},
			toggleRegisterModal() {
				this.isRegisterModalShown = !this.isRegisterModalShown
			},
			switchModal() {
				if (this.isLoginModalShown == true) {
					this.isRegisterModalShown = true
					this.isLoginModalShown = false
				} else {
					this.isLoginModalShown = true
					this.isRegisterModalShown = false
				}
			},
		},
		components:{
			'login-modal': loginModal,
			'register-modal': registerModal
		},
		computed: {
			...mapGetters({
				isLoggedIn: 'isLoggedIn',
				user: 'getUser'
			}),
		},
	}
</script>

<style lang="scss" scoped>
	@import 'assets/styles/_variables.scss';

	.menu-container {
		width: 1100px;
		left: 0;
		right: 0;
		position: absolute;
	}

	.fade-out-enter-active,
	.fade-out-leave-active {
		transition: opacity 1s;
	}

	.fade-out-enter,
	.fade-out-leave-to {
		opacity: 0;
	}

	.navbar-container {
		// left:0;
		// right:0;
		position: absolute;
		margin: 0 auto;
		z-index: 1;
		left: 0;
		width: 1100px;
		right: 0;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		margin-top: 30px;

		&.auth-buttons {
			justify-content: flex-end;
			align-content: center;

			.auth-list {
				display: flex;
				padding: 0;
				margin: 0;
				list-style: none;

				.auth-button {
					text-decoration: none;
					background: #EC4444;
					width: 150px;
					height: 40px;
					border-radius: 35px;
					margin-right: 20px;
					line-height: 40px;
					text-align: center;
					color: white;
					-webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.37);
					-moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.37);
					box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.37);
					transition:background 0.3s ease;
					text-shadow: 1px;

					&:hover{
						background:rgb(245, 72, 72);
					}
					&:last-child {
						margin-right: 0px;
					}
				}
			}
		}

		.dummy-element {
			opacity: 0;
			pointer-events: 0;
			width: 210px;
		}

		.navbar {
			z-index: 5;
			width: 400px;
			height: 40px;
			padding: 0;
			margin: 0;
			background: $text-color;
			border-radius: 35px;
			-webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.37);
			-moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.37);
			box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.37);



			.active-slider-holder {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				height: 100%;
				border-radius: 35px;

				#active-slider {
					z-index: 1;
					position: absolute;
					width: 123px;
					height: 30px;
					background: $main-color;
					border-radius: 35px;
					transition: all 0.3s ease-in;
					margin-left: 5px;
					margin-right: 5px;
					left: 0%;
				}
			}

			a {
				z-index: 2;
				color: white;
				border-radius: 35px;
				text-decoration: none;
				width: 130px;
				height: 30px;
				text-align: center;
				line-height: 30px;
				margin-left: 5px;
				margin-right: 5px;
			}
		}

		.profile-submenu-container {
			position: relative;
			text-decoration: none;


			.profile-submenu {
				cursor: pointer;
				padding-right: 20px;
				background: $main-color;
				width: 180px;
				height: 40px;
				border-radius: 35px;
				display: flex;
				justify-content: center;
				align-items: center;
				-webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.37);
				-moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.37);
				box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.37);
				transition:all 0.3s ease; 
				&:hover{
					background:rgb(245, 72, 72);
				}

				.profile-holder {
					height: 30px;
					width: 30px;

					.profile {
						height: 100%;
						width: 100%;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						border-radius: 100%;
					}
				}



				p {
					margin-left: 10px;
					text-align: center;
					margin: 0;
					padding: 0;
					color: white;
					margin-left: 10px;
				}

				.caveat-down {
					right: 5px;
					top: 0;
					bottom: 0;
					position: absolute;

					&:before,
					&:after {
						content: '';
						position: absolute;
						top: 16px;
						width: 2px;
						height: 7px;
						background: white;
					}

					&:before {
						transform: rotate(45deg);
						right: 9px;
					}

					&:after {
						transform: rotate(-45deg);
						right: 13px;
					}
				}
			}

			.profile-dropdown {
				opacity: 0;
				transform: translateY(-20px);
				pointer-events: none;
				z-index: -1;
				position: absolute;
				background-color: rgba(59, 59, 59, 0.767);
				min-height: 100px;
				top: 20px;
				border-radius: 0px 0px 35px 35px;
				left: 0;
				right: 0;
				transition: all 0.3s ease;

				.submenu-links {
					height: inherit;
					list-style: none;
					padding: 0;
					margin: 0;
					padding: 25px 20px;
					display: flex;
					flex-direction: column;
					align-items: center;

					a {
						text-align: center;
						border-radius: 35px;
						margin-bottom: 15px;
						text-decoration: none;
						transition: all 0.3s ease;
						height: 30px;
						width: 100%;
						line-height: 30px;


						&:hover {
							background: $main-color;
						}

						color:white;

						&:first-child {
							margin-top: 10px;
						}

						&:last-child {
							margin-bottom: 0px;
						}
					}
				}
			}

			.show {
				opacity: 1;
				transform: translateY(0px);
				pointer-events: all;
			}
		}
	}
</style>