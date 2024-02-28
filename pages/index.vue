<template>
  <div>
    <BContainer>
      <BRow>
        <BCol>
          <BRow>
            <BFormSelect v-model="criteria.firstname" :options="NameList" size="sm" class="mt-3"
              aria-placeholder="Name" />
            <!-- <treeselect v-model="value" :options="NameList" class="mt-3" /> -->
          </BRow>
        </BCol>
        <BCol>
          <!-- <treeselect v-model="value" :multiple="true" :options="options" class="mt-3" /> -->

          <BFormSelect v-model="criteria.role" textField="role" :options="user.RoleList" size="sm" class="mt-3" />
        </BCol>
        <BCol>
          <BButton variant="warning" class="mt-3" @click="criteria = {}">
            <Icon name="grommet-icons:close" size="25" color="white" />
          </BButton>
          <BButton style="margin-left: 5px;" variant="primary" class="mt-3 ml-2" @click="search">
            <Icon name="grommet-icons:search" size="25" color="white" />
          </BButton>
        </BCol>
      </BRow>
      <BRow class="mt-5">
        <BTableSimple :bordered="true" hover small dark="true" busyLoadingText="กำลังโหลด..." striped="true" responsive>
          <BThead>
            <BTr>
              <BTh>Name</BTh>
              <BTh>Role</BTh>
              <BTh>Time</BTh>
              <BTh>RFID</BTh>
            </BTr>
          </BThead>
          <BTbody>
            <BTr v-for="obj in list" :key="obj.id">
              <BTd>{{ obj.firstname }}</BTd>
              <BTd>{{ obj.role }}</BTd>
              <BTd>{{ obj.createdAt }}</BTd>
              <BTd>{{ obj.rfid }}</BTd>
            </BTr>
          </BTbody>
          <BTfoot> </BTfoot>
        </BTableSimple>
      </BRow>
    </BContainer>
    <footer>
      <BRow class="mt-3">
        <BCol offset="5">
          <BPagination v-model="Page" pills :total-rows="100" @page-click="search" />
        </BCol>
      </BRow>
    </footer>
  </div>
</template>

<script>
import Treeselect from "vue3-treeselect";
import "vue3-treeselect/dist/vue3-treeselect.css";
export default {
  data() {
    return {
      criteria: {},
      msg: "Hello world!",
      user: {},
      list: [],
      Page: 1,
      NameList: [],
    };
  },
  created() {
    this.user = UserList();
    this.NameList = [...new Set(this.user.NameList.map((v) => v.value))].sort();
    this.search()
  },
  methods: {
    async search() {
      let criteria = { criteria: this.criteria, page: this.Page };
      console.log(criteria);
      const { data, pending, error, refresh } = await useAsyncData(() =>
        $fetch("http://localhost:3002", {
          method: "post",
          body: criteria,
        })
      );

      this.list = await JSON.parse(JSON.stringify(data._value));
    },
  },
};

// console.log(NameList);
</script>
<style>
body{
  background-color: #202124;
}
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  color: white;
  text-align: center;
}
</style>
