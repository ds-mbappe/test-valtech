<template>
    <div class="container">
        <Card
            v-for="item in items"
            :key="item?.id"
            :id="item?.id"
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
        description: 'As an experience innovation company, we empower people and businesses to thrive in a rapidly changing and connected world. We believe exceptional things happen at the intersection between different crafts, cultures, and perspectives and that the most exciting breakthroughs come from combining uncommon connections.',
        background: valtech,
    },
    {
        id: 1,
        subtitle: 'Italy',
        title: 'Venice',
        description: 'Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals – including the Grand Canal thoroughfare – lined with Renaissance and Gothic palaces.',
        background: venice,
    },
    {
        id: 2,
        subtitle: 'Germany',
        title: 'Berlin',
        description: "Berlin, Germany's capital, dates to the 13th century. Reminders of the city's turbulent 20th-century history include its Holocaust memorial and the Berlin Wall's graffitied remains.",
        background: berlin,
    },
    {
        id: 3,
        subtitle: 'Spain',
        title: 'Barcelona',
        description: "Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city.",
        background: barcelona,
    },
    {
        id: 4,
        subtitle: 'France',
        title: 'Paris',
        description: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.",
        background: paris,
    },
    {
        id: 5,
        subtitle: 'Netherlands',
        title: 'Amsterdam',
        description: "Amsterdam is the Netherlands’ capital, known for its artistic heritage, elaborate canal system and narrow houses with gabled facades, legacies of the city’s 17th-century Golden Age.",
        background: amsterdam,
    },
    {
        id: 6,
        subtitle: 'United Kingdom',
        title: 'London',
        description: "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations.",
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