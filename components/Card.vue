<template>
    <div class="mainContainer" @mouseenter="isHovering" @mouseleave="isNotHovering">
        <img :src="background" :alt="`${subtitle} image`" />

        <div class="container">
            <p class="subtitle">
                {{ subtitle }}
            </p>
    
            <div class="mainContent">
                <p class="title">
                    {{ title }}
                </p>
    
                <p class="description">
                    {{ description }}
                </p>
            </div>

            <div v-if="id !== 0" class="exploreButton">
                <p class="exploreButtonText">
                    {{ 'Explore More' }}
                </p>
            </div>

            <div v-if="authorFirstname || authorLastname" class="authorDiv">
                <p class="unsplashAuthor">
                    {{ 'Photo by ' }}

                    <a :href="`https://unsplash.com/@${authorFirstname}?utm_source=test-valtech&utm_medium=referral`">
                        {{ (authorFirstname || '') + ' ' + (authorLastname || '') }}
                    </a>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    id: { type: Number, default: null },
    subtitle: { type: String, default: '' },
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    background: { type: String, default: '' },
    authorFirstname: { type: String, default: '' },
    authorLastname: { type: String, default: '' },
})

const hovering = ref(false)

const isHovering = () => {
    hovering.value = true;
}

const isNotHovering = () => {
    hovering.value = false;
}
</script>

<style lang="scss" scoped>
.mainContainer {
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background: gray;

    .exploreButton {
        padding: 12px;
        margin-top: 30px;
        border: 1px solid white;
        border-radius: 8px;
        height: 0px;
        opacity: 0;
        transition: opacity 0.25s ease-in-out;
    }

    .description {
        font-size: 14px;
        max-width: 350px;
        font-weight: 400;
        opacity: 0;
        height: 0px;
        color: white;
        letter-spacing: 1px;
        transition: opacity 0.25s ease-in-out;
    }
}

@media only screen and (min-width: 768px) {
    .mainContainer {
        .description {
            font-size: 16px;
            max-width: 650px;
        }
    }
}

.mainContainer :hover {
    .exploreButton, .description {
        height: fit-content;
        opacity: 1;
    }
}

.container {
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 18px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

img {
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-size: cover;
    background-position: center;
}

.subtitle {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 400;
    color: white;
    text-align: center;
    letter-spacing: 3px;
}

.mainContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-left: 15px;
    padding-right: 15px;
    gap: 20px;
}

.title {
    text-transform: capitalize;
    font-size: 32px;
    font-weight: 900;
    color: white;
    letter-spacing: 1px;
}

.exploreButtonText {
    color: white;
    font-weight: 700;
}

.authorDiv {
    position: absolute;
    bottom: 5px;
    right: 5px;
}

.unsplashAuthor {
    font-size: 10px;
    font-weight: 400;
    color: white;
    letter-spacing: 1px;
    text-decoration: underline;
}
</style>