<template>
    <transition name="modal-fade">
        <div class="login-modal">
            <div class="modal-container">

                <div class="left-part">
                    <div class="image-holder">
                        <div class="image-gradient"></div>
                        <p class="register-text">If you have an account - <strong><a href="javascript:void(0)"
                                    @click="switchPage">LOGIN</a></strong></p>
                    </div>
                </div>

                <div class="right-part">
                    <form action="" class="loginForm">

                        <transition name="opacity-transition">
                            <div class="step1" v-if="step==1">
                                <h1 class="step-title">REGISTER</h1>
                                <label for="username">Username:</label>
                                <input name="username" type="text" v-model="username" >
                                <label for="email">Email:</label>
                                <input name="email" type="text" v-model="email">
                                <label for="password">Password:</label>
                                <input name="password" type="password" v-model="password">
                                <input type="date" name="" id="" hidden="hidden">

                                <div class="buttons-container">
                                    <a href="javascript:void(0)" class="next-prev-btn" @click="nextStep">Next</a>
                                </div>
                            </div>
                        </transition>

                        <transition name="opacity-transition">
                            <div class="step2" v-if="step==2">

                                <label for="avatar">Avatar:</label>

                                <div class="image-holder">
                                    <div class="image" id="previewImage"></div>
                                </div>

                                <input type="file" @change="previewImage" hidden="hidden" name="upload-image"
                                    id="upload-image">
                                <a href="javascript:void(0)" @click="uploadImage" class="upload-btn">Upload Image</a>
                                
                                <label for="description-textbox">Description:</label>
                                <textarea name="description-textbox" id="" class="description-textbox"
                                    v-model="description"></textarea>

                                <div class="buttons-container">
                                    <a href="javascript:void(0)" class="next-prev-btn" @click="previousStep"
                                        style="margin-right:15px">Back</a>
                                    <a href="javascript:void(0)" class="next-prev-btn"
                                        @click="nextStep();setAvatar();">Next</a>
                                </div>
                            </div>
                        </transition>
                        <transition name="opacity-transition">
                            <div class="step3" v-show="step==3">
                                <h1 class="step-title">ADDITIONAL INFO</h1>

                                <label for="fullname">Full Name:</label>
                                <input name="fullname" type="text" v-model="fullname" >

                                <label class="occupation-label" for="occupation">What is your occupation?</label>
                                <input name="occupation" type="text" v-model="occupation" >
                                
                                <div class="custom-checkbox">
                                    <span style="padding-right:10px">Are you a smoker?</span>
                                    <p-check class="p-icon p-round p-smooth" v-model="isSmoker">
                                        <i slot="extra" class="icon mdi mdi-check"></i>
                                    </p-check>
                                </div>
                                <div class="custom-checkbox">
                                    <span style="padding-right:10px">Are you a student?</span>
                                    <p-check class="p-icon p-round p-smooth" v-model="isStudent">
                                        <i slot="extra" class="icon mdi mdi-check"></i>
                                    </p-check>
                                </div>

                                <div class="buttons-container">
                                    <a href="javascript:void(0)" class="next-prev-btn" @click="previousStep"
                                        style="margin-right:15px">Back</a>
                                    <a href="javascript:void(0)" class="next-prev-btn" @click="nextStep()">Next</a>
                                </div>
                            </div>

                        </transition>
                        <transition name="opacity-transition">
                            <div class="step4" v-show="step==4">
                                <h1 class="step-title">FINAL STEP</h1>

                                <label style="margin-top:30px">Gender:</label>

                                <div class="custom-checkbox gender-radio">
                                    <div class="pretty p-default p-smooth p-round">
                                        <input type="radio" class="gender-radios" name="radio1" value="true"
                                            v-model="gender">
                                        <div class="state">
                                            <label>Male</label>
                                        </div>
                                    </div>

                                    <div class="pretty p-default p-smooth p-round">
                                        <input type="radio" class="gender-radios" name="radio1" value="false"
                                            v-model="gender">
                                        <div class="state">
                                            <label>Female</label>
                                        </div>
                                    </div>
                                </div>

                                <label style="padding-top:20px">Birthday:</label>
                                <div class="date-container">
                                    <div class="label day-picker">
                                        <p id="js-day-trigger" @click="showDay">{{dateInfo.selectedDay}} <span
                                                class="caveat-down"></span></p>
                                        <ol data-simplebar data-simplebar-auto-hide="false"
                                            class="dropdown-list day-dropdown">
                                            <li @click="selectDay(day)" v-for="(day,index) in dateInfo.days"
                                                :key="index">{{day}}</li>
                                        </ol>
                                    </div>
                                    <div class="label month-picker">
                                        <p id="js-month-trigger" @click="showMonth">{{dateInfo.selectedMonth}} <span
                                                class="caveat-down"></span></p>

                                        <ol data-simplebar data-simplebar-auto-hide="false"
                                            class="dropdown-list month-dropdown">
                                            <li @click="selectMonth(month)" v-for="(month,index) in dateInfo.months"
                                                :key="index">{{month}}</li>
                                        </ol>
                                    </div>
                                    <div class="label year-picker">
                                        <p id="js-year-trigger" @click="showYear">{{dateInfo.selectedYear}} <span
                                                class="caveat-down"></span></p>

                                        <ol data-simplebar data-simplebar-auto-hide="false"
                                            class="dropdown-list year-dropdown">
                                            <li @click="selectYear(year)" v-for="(year,index) in dateInfo.years"
                                                :key="index">{{year}}</li>
                                        </ol>
                                    </div>
                                </div>
                                <label style="padding-top:10px" for="location">Location:</label>
                                <input name="location" type="text" v-model="location" >


                                <div class="buttons-container">
                                    <a href="javascript:void(0)" class="next-prev-btn submit-btn"
                                        @click.prevent="submit">REGISTER</a>
                                </div>
                            </div>

                        </transition>
                    </form>

                    <a href="javascript:void(0)" @click="closeButton">
                        <div class="close-btn"></div>
                    </a>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import simplebar from 'simplebar-vue';

    export default {
        data() {
            return {
                step: 1,
                maxSteps: 3,
                username: '',
                email: '',
                password: '',
                birthday: '',
                gender: '',
                avatar: '',
                fullname:'',
                description: '',
                isSmoker: false,
                isStudent: false,
                occupation: '',
                location:'',
                dateInfo: {
                    days: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    years: [1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000,
                        2001, 2002
                    ],
                    selectedDay: 'DD',
                    selectedMonth: 'MM',
                    selectedYear: 'YYYY',
                }
            }
        },
        mounted() {
            const self = this
        },
        methods: {
            closeButton() {
                this.step = 1
                this.$emit('close')
                this.resetForm()
            },
            resetForm() {
                this.email = ''
                this.username = ''
                this.password = ''
                this.birthday = ''
                this.gender = ''
                this.avatar = ''
                this.description = ''
                this.isSmoker = false
                this.isStudent = false
                this.occupation = ''
                this.location = ''
                this.dateInfo.selectedDay = 'DD'
                this.dateInfo.selectedMonth = 'MM'
                this.dateInfo.selectedYear = 'YYYY'
            },
            switchPage() {
                this.$emit('switchModal')
                this.resetForm()
            },
            nextStep() {
                this.step++
            },
            previousStep() {
                this.step--
            },
            previewImage(e) {
                if (e.target.files && e.target.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        document.getElementById('previewImage').style.backgroundImage = 'url(' + e.target.result +
                            ')';
                    }
                    reader.readAsDataURL(e.target.files[0]);
                }
            },
            setAvatar(image) {
                var bg = document.getElementById('previewImage').style.backgroundImage

                bg = bg.replace('url(', '').replace(')', '').replace(/\"/gi, "");

                this.avatar = bg
            },
            uploadImage() {
                document.getElementById('upload-image').click()
            },
            showDay() {
                var date = document.getElementsByClassName('day-dropdown')[0];
                date.classList.toggle("show");
            },
            showMonth() {
                var month = document.getElementsByClassName('month-dropdown')[0];
                month.classList.toggle("show");
            },
            showYear() {
                var year = document.getElementsByClassName('year-dropdown')[0];
                year.classList.toggle("show");
            },
            selectDay(day) {
                this.dateInfo.selectedDay = day
                this.showDay()
            },
            selectMonth(month) {
                this.dateInfo.selectedMonth = month
                this.showMonth()
            },
            selectYear(year) {
                this.dateInfo.selectedYear = year
                this.showYear()
            },
            setUserBirthday() {
                var isoStringBirthday = this.dateInfo.selectedYear + '-' + this.dateInfo.selectedMonth + '-' + this
                    .dateInfo.selectedDay
                var d = new Date(isoStringBirthday);
                this.birthday = d.toISOString()
            },
            async submit() {
                this.setUserBirthday()

                let formData = new FormData()

                formData.append('email', this.email)
                formData.append('password', this.password)
                formData.append('Gender', this.gender)
                formData.append('Avatar', this.avatar)
                formData.append('FullName', this.fullname)
                formData.append('Description', this.description)
                formData.append('isSmoker', this.isSmoker)
                formData.append('IsStudent', this.isStudent)
                formData.append('Occupation', this.occupation)
                formData.append('username', this.username)
                formData.append('Birthday', this.birthday)
                formData.append('Location', this.location)

                await this.axios.post('/auth/local/register', formData)
                    .then(response => {
                        this.$store.dispatch('login', response.data)
                        this.closeButton()
                    })
                    .catch(error => {
                        console.log(error)
                    })

            }
        },
        components: {
            simplebar
        },
    }

</script>
<style lang="scss" scoped>
    @import '../assets/styles/_variables.scss';

    // REGISTRATION STEPS TRANSITION
    .opacity-transition-enter-active {
        transition: all .8s;
    }

    .opacity-transition-enter,
    .opacity-transition-leave-to {
        opacity: 0;
    }

    // LOGIN AND REGISTER MODAL OPEN AND CLOSE

    .modal-fade-enter-active {
        transition: all .5s
    }

    .modal-fade-leave-active {
        transition: all .5s;
    }

    .modal-fade-enter,
    .modal-fade-leave-to {
        opacity: 0;
        transform: translateY(-120px);
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

                .image-holder {
                    position: relative;
                    height: 100%;
                    width: 100%;
                    border-radius: 35px 0px 0px 35px;
                    background-image: url('../assets/images/register.jpg');
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;

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
                        border-radius: 0px 0px 0px 35px;
                        height: 300px;
                        width: 100%;
                        bottom: 0;
                        background: rgb(0, 0, 0);
                        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0) 100%);
                    }
                }
            }

            .right-part {
                position: relative;
                width: 50%;
                border-radius: 0px 35px 35px 0px;
                color: white;

                .loginForm {
                    height: 100%;
                    width: 100%;

                    .step1,
                    .step2,
                    .step3,
                    .step4 {
                        height: 100%;
                        width: 325px;
                        margin: 0 auto;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                        .date-container {
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            margin-bottom: 25px;

                            .label {
                                cursor: pointer;
                                line-height: 40px;
                                text-align: center;
                                border: 1px solid white;
                                border-radius: 35px;
                                width: 80px;
                                height: 40px;

                                p {
                                    margin: 0;
                                    padding-right: 10px;
                                    position: relative;

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
                            }

                            .day-picker,
                            .month-picker,
                            .year-picker {
                                position: relative;

                                .dropdown-list {
                                    z-index: 1;
                                    position: absolute;
                                    top: 40px;
                                    right: 0;
                                    left: 0;
                                    border-radius: 0px 0px 20px 20px;
                                    border-left: 1px solid white;
                                    border-right: 1px solid white;
                                    border-bottom: 1px solid white;
                                    height: 135px;
                                    margin: 0;
                                    padding: 0;
                                    padding-right: 10px;
                                    list-style: none;
                                    opacity: 0;
                                    pointer-events: none;
                                    transition: all 0.3s;
                                    background: $main-color;

                                    &.show {
                                        opacity: 1;
                                        pointer-events: all;
                                    }

                                    li {
                                        transition: all 0.3s;
                                        border-radius: 35px;

                                        &:hover {
                                            background: rgba(0, 0, 0, 0.651);
                                        }
                                    }

                                    &.show {
                                        opacity: 1;
                                        pointer-events: all;
                                    }
                                }
                            }
                        }

                        .custom-checkbox {
                            display: flex;
                            justify-content: space-between;
                            padding-top: 30px;
                            text-align: center;
                            width: 100%;

                            &.gender-radio {
                                justify-content: space-evenly;
                                padding: 0;

                                label {
                                    font-weight: normal;
                                }
                            }
                        }

                        .step-title {
                            margin: 0;
                            font-size: 38px;
                            padding-bottom: 30px;
                            text-align: center;
                            text-transform: uppercase;
                        }

                        label {
                            padding-left: 0px;
                            text-align: center;
                            padding-bottom: 15px;
                            font-weight: bold;

                        }

                        span {
                            font-weight: bold;
                        }

                        input:not(.gender-radios) {
                            width: 322px;
                            height: 35px;
                            border: 1px solid white;
                            border-radius: 35px;
                            background: transparent;
                            color: white;
                            font-size: 16px;
                            font-family: Century Gothic;
                            margin-bottom: 25px;
                            text-align: center;
                        }

                        .image-holder {
                            margin-top: 0px;
                            height: 100px;
                            width: 100px;
                            border: 2px solid white;
                            border-radius: 100%;

                            .image {
                                height: 100%;
                                width: 100%;
                                background-size: cover;
                                border-radius: 100%;
                            }
                        }

                        .upload-btn {
                            color: white;
                            border: 1px solid white;
                            border-radius: 35px;
                            height: 30px;
                            width: 140px;
                            text-align: center;
                            line-height: 30px;
                            text-decoration: none;
                            margin-top: 20px;
                            font-size: 12px;
                            text-transform: uppercase;
                            font-weight: bold;
                            margin-bottom: 40px;
                        }

                        .description-textbox {
                            background-color: transparent;
                            height: 140px;
                            width: 325px;
                            border: 1px solid white;
                            border-radius: 25px;
                            color: white;
                            resize: none;
                            padding-top: 10px;
                            padding-left: 20px;
                            font-family: Century Gothic;
                        }

                        .buttons-container {
                            margin-top: 30px;
                            text-align: center;
                            display: flex;
                            justify-content: space-evenly;

                            .next-prev-btn {
                                padding: 5px 25px;
                                background: white;
                                border-radius: 35px;
                                font-size: 16px;
                                font-weight: bold;
                                text-decoration: none;
                                color: $text-color;
                                font-family: Century Gothic;
                                transition: transform 0.3s ease;

                                &:hover {
                                    transform: scale(1.06);
                                }

                                &.submit-btn {
                                    padding: 10px 35px;
                                    font-size: 18px;
                                }
                            }
                        }
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
                    transition: all 0.3s ease;

                    &:hover {
                        transform: scale(1.08);
                    }
                }
            }
        }
    }
</style>