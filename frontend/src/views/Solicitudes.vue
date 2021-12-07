<template>
  <div>
    <NavbarHome />
    <v-card elevation="0">
      <v-tabs color="deep-orange accent-4" class="amber lighten-4" right>
        <v-tab>Pendientes</v-tab>
        <v-tab>Enviadas</v-tab>
        <v-tab-item class="mt-4">
          <v-container>
            <v-row>
              <v-expansion-panels focusable popout>
                <v-expansion-panel
                  v-for="(item, i) in receiveRequest"
                  :key="i"
                  style="border-radius: 10px"
                >
                  <v-expansion-panel-header
                    class="orange lighten-5 orange--text"
                  >
                    <v-img
                      class="pa-7 secondary rounded-circle d-inline-block mx-2"
                      lazy-src="https://picsum.photos/id/11/10/3"
                      max-height="75"
                      max-width="75"
                      src="https://picsum.photos/id/30/500/300"
                    ></v-img>

                    <h5 class="deep-orange--text ml-3">
                      {{ item.sender.firstName + " " + item.sender.lastName }}
                    </h5>
                    {{ item.date }}
                  </v-expansion-panel-header>

                  <v-expansion-panel-content>
                    <v-row class="m-3">
                      {{item.sender.firstName }} quiere adoptar a  {{item.pet.name}}
                    </v-row> 
                    <v-row class="m-2" justify="end">
                      <v-speed-dial
                        v-model="fab"
                        top="top"
                        bottom="bottom"
                        right="right"
                        left="left"
                        direction="left"
                        :open-on-hover="true"
                        transition="slide-y-reverse-transition"
                      >
                        <template v-slot:activator>
                          <v-btn v-model="fab" color="orange darken-2" dark fab>
                            <v-icon v-if="fab"> mdi-close </v-icon>
                            <v-icon v-else> mdi-dots-horizontal </v-icon>
                          </v-btn>
                        </template>
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn fab dark small color="red" v-bind="attrs" v-on="on"
                            @click="denyRequest(item.sender.id,item.pet.id)">
                              <v-icon>mdi-cancel</v-icon>
                            </v-btn>
                          </template>
                          <span>Rechazar</span>
                        </v-tooltip>
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn fab dark small color="green" v-bind="attrs" v-on="on"
                            @click="acceptRequest(item.sender.id,item.pet.id)">
                              <v-icon>mdi-check</v-icon>
                            </v-btn>
                          </template>
                          <span>Aceptar</span>
                        </v-tooltip>
                      </v-speed-dial>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab-item class="mt-4">
          <v-container>
            <v-row>
              <v-expansion-panels focusable popout>
                <v-expansion-panel
                  v-for="(item, i) in sendRequest"
                  :key="i"
                  style="border-radius: 10px"
                >
                  <v-expansion-panel-header
                    :class="{
                            'red lighten-5 red--text':sendRequest[i].state=='RECHAZADA',
                            'green lighten-5 green--text':sendRequest[i].state==='ACEPTADA',
                            'gray lighten-4 gray--text':sendRequest[i].state==='PENDIENTE'
                            }"
                  >
                    <v-img
                      class="pa-7 secondary rounded-circle d-inline-block mx-2"
                      lazy-src="https://picsum.photos/id/11/10/3"
                      max-height="75"
                      max-width="75"
                      src="https://picsum.photos/id/30/500/300"
                    ></v-img>

                    <h5 :class="{
                            'deep-red--text':sendRequest[i].state=='RECHAZADA',
                            'deep-green--text':sendRequest[i].state==='ACEPTADA',
                            'dark--text':sendRequest[i].state==='PENDIENTE'
                            }"
                    >
                      {{ item.receiver.firstName + " " + item.receiver.lastName }}
                    </h5>
                    {{ item.date }}
                  </v-expansion-panel-header>

                  <v-expansion-panel-content>
                    <v-row class="m-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid sint est sunt quidem, repellat distinctio
                      consequuntur quod vero, laboriosam porro recusandae
                      nostrum hic quas debitis deserunt similique exercitationem
                      fugiat incidunt aut ab facere molestiae adipisci ipsa?
                      Provident ullam modi, accusantium commodi in incidunt
                      soluta doloremque earum corporis, ea, officiis deleniti.
                    </v-row>
                    <v-row class="m-2" justify="end">
                      <v-speed-dial
                        v-model="fab"
                        top="top"
                        bottom="bottom"
                        right="right"
                        left="left"
                        direction="left"
                        :open-on-hover="true"
                        transition="slide-y-reverse-transition"
                      >
                        <template v-slot:activator>
                          <v-btn v-model="fab" color="orange darken-2" dark fab>
                            <v-icon v-if="fab"> mdi-close </v-icon>
                            <v-icon v-else> mdi-dots-horizontal </v-icon>
                          </v-btn>
                        </template>
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn fab dark small color="red" v-bind="attrs" v-on="on">
                              <v-icon>mdi-cancel</v-icon>
                            </v-btn>
                          </template>
                          <span>Rechazar</span>
                        </v-tooltip>
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn fab dark small color="green" v-bind="attrs" v-on="on">
                              <v-icon>mdi-check</v-icon>
                            </v-btn>
                          </template>
                          <span>Aceptar</span>
                        </v-tooltip>
                      </v-speed-dial>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import { RECEIVE_REQUEST,SEND_REQUEST,UPDATE_REQUEST } from "@/graphql/queries/requestQueries";
import NavbarHome from "@/components/NavbarHome";
export default {
  name: "Solicitudes",
  components: { NavbarHome },
  data() {
    return {
      fab: false,
      receiveRequest: [],
      sendRequest:[],
      stateColor:'',
      stateText:''
    };
  },
  computed:{
    
  },
  methods: {
    async getReceiveRequest() {
      try {
        const { allUserRequest } = (
          await this.$apollo.query({
            query: RECEIVE_REQUEST,
            variables: { receiverId: this.$store.state.id },
          })
        ).data;
        this.receiveRequest = allUserRequest;
      } catch (error) {
        console.error(error);
      }
    },
    async getSendRequest(){
      try {
        const {allUserRequest} = (await this.$apollo.query({
          query: SEND_REQUEST,
          variables: {senderId:this.$store.state.id}
        })).data
        this.sendRequest = allUserRequest
      } catch (error) {
        console.error(error)
      }
    },
    async acceptRequest(idSender,idPet){
      const {updateReceiveRequest} = (await this.$apollo.mutate({mutation:UPDATE_REQUEST,
      variables:{
        receiverId:this.$store.state.id,
        senderId:idSender,
        petId:idPet,
        state:"ACEPTADA"
      }})).data
      if(updateReceiveRequest.verified){
        this.$swal({icon:'success',title:'Solicitud Aceptada'})
        this.getReceiveRequest()
      }
    },
    async denyRequest(idSender,idPet){
      const {updateReceiveRequest} = (await this.$apollo.mutate({mutation:UPDATE_REQUEST,
      variables:{
        receiverId:this.$store.state.id,
        senderId:idSender,
        petId:idPet,
        state:"RECHAZADA"
      }})).data
      console.log(updateReceiveRequest);
      if(updateReceiveRequest.verified){
        this.$swal({icon:'success',title:'Solicitud Denegada'})
        this.getReceiveRequest()
      }
    }
  },
  async created() {
    await this.getReceiveRequest();
    await this.getSendRequest();
  },
};
</script>

<style scoped></style>
