<template>
	<transition name="scale" appear>
	    <a href="javascript:void(0)">
		    <div class="box-holder">
		    	<div class="image-holder">
		    		<div class="image" :style="{ backgroundImage: 'url(http://localhost:1337'+flatInfo.Gallery[0].url+')' }">
		    			<div class="information">
		    				<div class="location">
		    					<p>{{flatInfo.Location}}</p>
		    				</div>
		    				<div class="space">
		    					<p>{{flatInfo.Space}}</p>
		    				</div>
		    			</div>
		    		</div>
		    		<div class="image-gradient"></div>
		    		<div class="title-price">
		    			<p class="box-title">{{flatInfo.Title}}</p>
	                    <!-- 38 chars max --> 
		    			<p class="price">{{flatInfo.Price}}€</p>
		    		</div>					
		    	</div>
		    </div>
	    </a>
	</transition>
</template>

<script>
export default {
    props:['flatInfo']
}
</script>

<style lang="scss" scoped>
	@import '../assets/styles/_variables.scss';

	.scale-enter-active,.scale-leave-active {
        transition: all .5s
    }

    .scale-enter,
    .scale-leave-to {
        opacity: 0;
        transform: scale(0);
    }

a{
    text-decoration: none;

	.box-holder { 
        background: #ec4444;
        padding: 3px;
		height: 215px;
		width: 215px;
		border-radius: 35px;
		-webkit-box-shadow: 0px 0px 29px 0px rgba(0,0,0,0.18);
		-moz-box-shadow: 0px 0px 29px 0px rgba(0,0,0,0.18);
		box-shadow: 0px 0px 29px 0px rgba(0,0,0,0.18);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
        transition: all 0.3s;
        transform: translateZ(0);
        &:hover{
		    -webkit-box-shadow: 0px 0px 29px 0px rgba(0, 0, 0, 0.411);
		    -moz-box-shadow: 0px 0px 29px 0px rgba(0,0,0, 0.411);
		    box-shadow: 0px 0px 29px 0px rgba(0, 0, 0, 0.411);
            transform: scale(1.09);
        }
		.image-holder{
			position:relative;
			height:215px;
			width:215px;
			.image{
				position:relative;
				height:100%;
				width:100%;
				background-size: cover;
				background-repeat: no-repeat;
				border-radius: 35px;
				.information{
					display:flex;
					justify-content: space-evenly;
					position: absolute;
					top:15px;
					left:0;
					right:0;
					& > div{
						width:58px;
						height:17px;
						border-radius: 35px;
						background:$main-color;
						p{
							margin:0;
							color:white;
							text-align: center;
							font-size: 11px;
							font-weight: bold;
							line-height: 17px;
						}
					}
				}
			}
			.image-gradient{
				position:absolute;
				border-radius: 0px 0px 35px 35px;
				height:140px;
				width:100%;
				bottom:0;
				background: rgb(0,0,0);
				background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
			}
		}
		.title-price{
			position:absolute;
			left:0;
			right:0;
			bottom:0;
			font-weight: bold;
			padding:10px;
			>.box-title,.price{
				text-align: center;
				letter-spacing: 1px;
				margin:0;
			}
			.box-title{
				color:white;
				text-transform: uppercase;
				font-size: 17px;
			}
			.price{
				color:$main-color;
				font-weight: bold;
				font-size: 35px;
			}
		}
	}
}
</style>