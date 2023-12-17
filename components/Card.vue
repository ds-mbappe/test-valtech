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

            <div class="exploreButton">
                <p class="exploreButtonText">
                    {{ 'Explore More' }}
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
        margin-top: 50px;
        border: 1px solid white;
        border-radius: 8px;
        opacity: 0;
        transition: opacity 0.25s ease-in-out;
    }
}

.mainContainer :hover {
    .exploreButton {
        opacity: 1;
    }
}

.mainContainer :hover {
    .container {
        top: 50%;
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
    top: 60%;
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
    gap: 20px;
}

.title {
    text-transform: capitalize;
    font-size: 32px;
    font-weight: 900;
    color: white;
    letter-spacing: 1px;
}

.description {
    font-size: 14px;
    max-width: 300px;
    font-weight: 400;
    color: white;
    letter-spacing: 1px;
}

.exploreButtonText {
    color: white;
    font-weight: 700;
}
</style>