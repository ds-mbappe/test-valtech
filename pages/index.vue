<template>
    <div class="container">
        <!-- To load the local static images, replace images?.[index] with item?.background -->
        <Card
            v-for="(item, index) in items"
            :key="item?.id"
            :id="item?.id"
            :subtitle="item?.subtitle"
            :title="item?.title"
            :description="item?.description"
            :background="item?.id === 0 ? item?.background : images?.[index]?.urls?.regular"
            :author-firstname="item?.id === 0 ? null : images?.[index]?.user?.first_name"
            :author-lastname="item?.id === 0 ? null : images?.[index]?.user?.last_name"
        />
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import valtech from "../static/valtech.jpg"
import venice from "../static/venice.jpg"
import berlin from "../static/berlin.jpg"
import barcelona from "../static/barcelona.jpg"
import paris from "../static/paris.jpg"
import amsterdam from "../static/amsterdam.jpg"
import london from "../static/london.jpeg"
import { createApi } from "unsplash-js"

onMounted(async () => {
    await getCityImages()
})

const config = useRuntimeConfig();

const unsplash = createApi({
    accessKey: config?.public?.secret,
})

const images = ref([])
const items = ref([
    {
        id: 0,
        subtitle: 'Front-end',
        title: 'valtech_',
        description: 'As an experience innovation company, we empower people and businesses to thrive in a rapidly changing and connected world.',
        background: valtech,
    },
    {
        id: 1,
        subtitle: 'Italy',
        title: 'Venice',
        description: 'Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea.',
        background: venice,
    },
    {
        id: 2,
        subtitle: 'Germany',
        title: 'Berlin',
        description: "Berlin, Germany's capital, dates to the 13th century.",
        background: berlin,
    },
    {
        id: 3,
        subtitle: 'Spain',
        title: 'Barcelona',
        description: "Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture.",
        background: barcelona,
    },
    {
        id: 4,
        subtitle: 'France',
        title: 'Paris',
        description: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture..",
        background: paris,
    },
    {
        id: 5,
        subtitle: 'Netherlands',
        title: 'Amsterdam',
        description: "Amsterdam is the Netherlands’ capital, known for its artistic heritage, elaborate canal system and narrow houses.",
        background: amsterdam,
    },
    {
        id: 6,
        subtitle: 'United Kingdom',
        title: 'London',
        description: "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.",
        background: london,
    },
])

// Get imagesfrom Unsplash API
const getCityImages = async () => {
    unsplash.search.getPhotos({ query: 'city', page: 1, perPage: 10 }).then((photos) => {
        if (photos?.errors) {
            console.log("Error getting photos")
        }
        else {
            if (photos?.response?.results?.length) {
                images.value = photos?.response?.results
            }
        }
    })
}
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