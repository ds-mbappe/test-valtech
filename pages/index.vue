<template>
    <div class="container">
        <Card
            v-for="item in items"
            :key="item?.id"
            :subtitle="item?.subtitle"
            :title="item?.title"
            :description="item?.description"
            :background="item?.background"
        />
    </div>
</template>

<script setup>
import valtech from "../static/valtech.jpg"
import venice from "../static/venice.jpg"
import berlin from "../static/berlin.jpg"
import barcelona from "../static/barcelona.jpg"
import paris from "../static/paris.jpg"
import amsterdam from "../static/amsterdam.jpg"
import london from "../static/london.jpeg"

const items = ref([
    {
        id: 0,
        subtitle: 'Front-end',
        title: 'valtech_',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        background: valtech,
    },
    {
        id: 1,
        subtitle: 'Italy',
        title: 'Venice',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        background: venice,
    },
    {
        id: 0,
        subtitle: 'Germany',
        title: 'Berlin',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        background: berlin,
    },
    {
        id: 0,
        subtitle: 'Spain',
        title: 'Barcelona',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        background: barcelona,
    },
    {
        id: 0,
        subtitle: 'France',
        title: 'Paris',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        background: paris,
    },
    {
        id: 0,
        subtitle: 'Netherlands',
        title: 'Amsterdam',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        background: amsterdam,
    },
    {
        id: 0,
        subtitle: 'United Kingdom',
        title: 'London',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        background: london,
    },
])
</script>

<style lang="scss" scoped>
.container {
    display: grid;
    flex-direction: column;
    padding: 12px;
    gap: 12px;
}

@media only screen and (min-width: 768px) {
    .container {
        display: grid;
        gap: 0px;
        row-gap: 12px;
        column-gap: 12px;
    }
    .container :nth-child(1) {
        grid-column: 1 / span 3;
        grid-row: 1 / span 2;
    }
}

@media only screen and (min-width: 1280px) {
    .container {
        display: grid;
        gap: 0px;
        row-gap: 12px;
        column-gap: 12px;
    }
    .container :nth-child(1) {
        grid-column: 1 / span 4;
        grid-row: 1 / span 2;
    }
    .container :nth-child(2) {
        grid-column: 1 / span 2;
        grid-row: 3 / span 1;
    }
    .container :nth-child(3) {
        grid-column: 3 / span 1;
        grid-row: 3 / span 1;
    }
    .container :nth-child(4) {
        grid-column: 4 / span 1;
        grid-row: 3 / span 1;
    }
    .container :nth-child(5) {
        grid-column: 1 / span 1;
        grid-row: 4 / span 1;
    }
    .container :nth-child(6) {
        grid-column: 2 / span 1;
        grid-row: 4 / span 1;
    }
    .container :nth-child(7) {
        grid-column: 3 / span 2;
        grid-row: 4 / span 1;
    }
}
</style>