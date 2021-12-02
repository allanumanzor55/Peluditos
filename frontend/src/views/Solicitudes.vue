<template>
    <div>
        <NavbarHome />
        <v-container fluid class="amber">
           <v-expansion-panels focusable popout>
                <v-expansion-panel
                    v-for="(item,i) in 12"
                    :key="i"
                >
                    <v-expansion-panel-header>
                        
                        <v-img
                            class="pa-7 secondary rounded-circle d-inline-block mx-2"
                            lazy-src="https://picsum.photos/id/11/10/6"
                            max-height="75"
                            max-width="75"
                            src="https://picsum.photos/id/11/500/300"
                        ></v-img>

                        <h5>Titulo de la Solicitud</h5>
                    </v-expansion-panel-header>

                    <v-expansion-panel-content> 
                        <v-row class="m-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sint est sunt quidem, repellat distinctio consequuntur quod vero, laboriosam porro recusandae nostrum hic quas debitis deserunt similique exercitationem fugiat incidunt aut ab facere molestiae adipisci ipsa? Provident ullam modi, accusantium commodi in incidunt soluta doloremque earum corporis, ea, officiis deleniti.
                        </v-row>
                        <v-row class="m-2" justify="end">
                            <v-btn class="m-2" depressed color="amber" >
                                Opcion 1
                            </v-btn>

                            <v-btn class="m-2" depressed color="amber" >
                                Opcion 2
                            </v-btn>

                        </v-row>
                    </v-expansion-panel-content>
                    
                </v-expansion-panel>
            </v-expansion-panels>
        </v-container>
    </div>
</template>

<script>
import NavbarHome from '@/components/NavbarHome'
export default {
    name:'Solicitudes',
    components:{NavbarHome}
}
</script>