<template>
    <div class="mt">
        <b-container class="bv-example-row">
        <b-row>
            <b-col cols="3">
                <b-list-group>
                <b-list-group-item button>
                    <div>
                    <b-button v-b-toggle.collapse-1 class="m-1" variant="light">Categorias</b-button>
                    <b-collapse visible id="collapse-1">
                        <b-form-checkbox>Perros</b-form-checkbox>
                        <b-form-checkbox>Gatos</b-form-checkbox>
                        <b-form-checkbox>Conejos</b-form-checkbox>
                        <b-form-checkbox>Hamsters</b-form-checkbox>
                    </b-collapse>
                    </div>
                </b-list-group-item>
                <b-list-group-item button>
                    <div>
                    <b-button v-b-toggle.collapse-2 class="m-1" variant="light">Edad</b-button>
                    <b-collapse visible id="collapse-2">
                        <b-input-group prepend="0" append="10" class="mt-3">
                    <b-form-input type="range" min="0" max="15"></b-form-input>
                    </b-input-group>
                    </b-collapse>
                    </div>
                </b-list-group-item>
                <b-list-group-item button>
                    <div>
                    <b-button v-b-toggle.collapse-3 class="m-1" variant="light">Vacunacion</b-button>
                    <b-collapse visible id="collapse-3">
                        <b-form-checkbox>Todas las Vacunas</b-form-checkbox>
                        <b-form-checkbox>Vacunacion Imcompleta</b-form-checkbox>
                        <b-form-checkbox>No Vacunado</b-form-checkbox>
                    </b-collapse>
                    </div>
                </b-list-group-item>
                </b-list-group>
            </b-col>
            <b-col cols="9" class="wrapper">
            <div>
                <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
                align="center"

            >
                <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>

                <b-button href="#" class="colorbtn">Go somewhere</b-button>
            </b-card>
            </div>
                        <div>
                <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
                align="center"

            >
                <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>

                <b-button href="#" class="colorbtn">Go somewhere</b-button>
            </b-card>
            </div>
                        <div>
                <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
                align="center"

            >
                <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>

                <b-button href="#" class="colorbtn">Go somewhere</b-button>
            </b-card>
            </div>
                        <div>
                <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
                align="center"

            >
                <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>

                <b-button href="#" class="colorbtn">Go somewhere</b-button>
            </b-card>
            </div>

                        <div>
                <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
                align="center"

            >
                <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>

                <b-button href="#" class="colorbtn">Go somewhere</b-button>
            </b-card>
            </div>
                

            
            </b-col>
            
        </b-row>
        </b-container>
    </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}

.mt{
    margin-top: 3%;
}

.colorbtn{
    background: #FF9922!important;
}
.colorbtn:hover{
    background-color: #f8a94e!important;
    border-color: #FF9922!important;
}
</style>