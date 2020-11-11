<template>
    <transition name="modal-fade">
        <div class="login-modal">
            <div class="modal-container">
                <div class="left-part">
                    <h1>LOGIN</h1>

                    <form action="" class="loginForm">
                        <label for="email">Email:</label>
                        <input name="email" type="text" v-model="identifier">
                        <label for="password">Password:</label>
                        <input name="password" type="password" v-model="password">
                        <div class="custom-checkbox">
                            <span style="padding-right:10px">Remember me</span>
                            <p-check class="p-icon p-round p-smooth" v-model="rememberMe">
                                <i slot="extra" class="icon mdi mdi-check"></i>
                            </p-check>
                        </div>
                        <button type="submit"><a href="javascript:void(0)" class="submit-button"
                                @click.prevent="submit">Login</a></button>
                    </form>
                </div>
                <div class="right-part">
                    <div class="image-holder">
                        <div class="image-gradient"></div>
                        <p class="register-text">If you don't have an account - <strong><a href="javascript:void(0)"
                                    @click="switchPage">REGISTER</a></strong></p>
                    </div>

                    <a href="javascript:void(0)" @click="closeButton">
                        <div class="close-btn"></div>
                    </a>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                identifier: '',
                password: '',
                rememberMe: false,
            }
        },
        methods: {
            closeButton() {
                this.$emit('close')
                this.resetForm()
            },
            resetForm() {
                this.identifier = ''
                this.password = ''
                this.rememberMe = false
            },
            switchPage() {
                this.$emit('switchModal')
            },
            async submit() {
                let formData = new FormData()
                formData.append('identifier', this.identifier)
                formData.append('password', this.password)

                this.axios.post('/auth/local', formData)
                    .then(response => {
                        this.$store.dispatch('login', response.data)

                        if(this.rememberMe){
                            this.$store.dispatch('rememberSession',response.data)
                        }
                        this.closeButton()

                    }).catch(error => console.log(error))
            }
        },
    }
</script>
<style lang="scss" scoped>
    @import '../assets/styles/_variables.scss';

    .modal-fade-enter-active {
        transition: all .5s;
    }

    .modal-fade-leave-active {
        transition: all .5s;
    }

    .modal-fade-enter,
    .modal-fade-leave-to {
        transform: translateY(-120px);
        opacity: 0;
    }

    .login-modal {
        z-index: 2;
        position: fixed;
        height: 100%;
        width: 100%;
        background: rgba(255, 255, 255, 0.88);


        .modal-container {
            display: flex;
            max-width: 1100px;
            border-radius: 35px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: $main-color;
            height: 605px;
            width: 100%;
            -webkit-box-shadow: 0px 0px 29px 0px rgba(0, 0, 0, 0.514);
            -moz-box-shadow: 0px 0px 29px 0px rgba(0, 0, 0, 0.514);
            box-shadow: 0px 0px 29px 0px rgba(0, 0, 0, 0.514);


            .left-part {
                width: 50%;
                border-radius: 35px 0px 0px 35px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: white;

                >h1 {
                    margin: 0;
                    font-size: 46px;
                    padding-bottom: 25px;
                }

                .loginForm {
                    display: grid;
                    // color: white;

                    label {
                        padding-left: 0px;
                        text-align: center;
                        padding-bottom: 15px;
                    }

                    input {
                        width: 322px;
                        height: 35px;
                        border: 1px solid white;
                        border-radius: 35px;
                        background: transparent;
                        color: white;
                        // padding-left: 10px;
                        font-size: 16px;
                        font-family: Century Gothic;
                        margin-bottom: 25px;
                        text-align: center;
                    }

                    .custom-checkbox {
                        padding-top: 15px;
                        text-align: center;
                    }

                    button {
                        margin: 0 auto;
                        margin-top: 45px;
                        width: 150px;
                        height: 45px;
                        background: white;
                        border: none;
                        border-radius: 35px;
                        font-weight: bold;

                        .submit-button {
                            font-size: 20px;
                            height: 100%;
                            width: 100%;
                            text-decoration: none;
                            color: $text-color;
                            font-family: Century Gothic;
                        }
                    }
                }
            }

            .right-part {
                position: relative;
                width: 50%;
                border-radius: 0px 35px 35px 0px;

                .image-holder {
                    position: relative;
                    height: 100%;
                    width: 100%;
                    border-radius: 0px 35px 35px 0px;
                    background-image: url('../assets/images/flat2.jpg');
                    background-position: center;
                    background-size: cover;

                    .register-text {
                        width: 100%;
                        position: absolute;
                        margin: 0;
                        bottom: 40px;
                        color: white;
                        font-size: 22;
                        font-style: italic;
                        text-align: center;

                        a {
                            color: white;
                            text-decoration: none;
                        }
                    }

                    .image-gradient {
                        position: absolute;
                        border-radius: 0px 35px 35px 0px;
                        height: 300px;
                        width: 100%;
                        bottom: 0;
                        background: rgb(0, 0, 0);
                        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0) 100%);
                    }
                }

                .close-btn {
                    position: absolute;
                    top: -25px;
                    right: -15px;
                    height: 50px;
                    width: 50px;
                    background-image: url('../assets/images/close-btn.svg');
                    background-size: cover;
                }
            }
        }
    }
</style>