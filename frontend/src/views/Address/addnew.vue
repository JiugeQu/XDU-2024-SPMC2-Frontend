<template>
  <div class="group_1 page">
    <div class="group_2">
      <div class="group_3">
        <img class="image_1" src="/public/image/s1.png" />
        <img class="image_2" src="/public/image/s2.png" />
      </div>
      <img class="image_3" src="/public/image/s13.png" />
    </div>
    <img @click="gotoaddr" class="image_4" src="/public/image/s12.png" />
    <div class="group_4">
      <div class="group_5">
        <span class="font_1">Consignee</span>
        <input
          v-model="consignee"
          type="text"
          class="text_1"
          placeholder="Please fill in the name of the consignee"
        />
      </div>
      <div class="group_6">
        <span class="font_1">Phone Number</span>
        <input
          v-model="phonenumber"
          type="text"
          class="text_1"
          placeholder="Please fill in the phone number of the consignee"
        />
      </div>
      <div class="group_6">
        <span class="font_1">Location </span>
        <input
          v-model="location"
          type="text"
          class="text_1"
          placeholder="Provinces, municipalities, townships, etc."
        />
      </div>
      <div class="group_6">
        <span class="font_1">Detailed Location</span>
        <input
          v-model="detailedlocation"
          type="text"
          class="text_1"
          placeholder="Street, building number, etc."
        />
      </div>
      <div class="group_7">
        <span class="font_1">Label</span>
        <label>
          <input
            type="checkbox"
            class="text_2"
            v-model="homeTags"
            value="Home"
          />
          <span class="font_2">Home</span>
        </label>
        <label>
          <input
            type="checkbox"
            class="text_2"
            v-model="companyTags"
            value="Company"
          />
          <span class="font_2">Company</span>
        </label>
        <label>
          <input
            type="checkbox"
            class="text_2"
            v-model="schoolTags"
            value="School"
          />
          <span class="font_2">School</span>
        </label>
      </div>
    </div>
    <div>
      <button @click="handleSubmit" class="button_1">Save</button>
    </div>
  </div>
</template>
        
<script>
import axios from "axios";
export default {
  beforeCreate() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:rgb(235, 235, 235)");
  },
  data() {
    return {
      consignee: "",
      phonenumber: "",
      location: "",
      detailedlocation: "",
      homeTags: false,
      companyTags: false,
      schoolTags: false,
      // token:''
    };
  },

  methods: {
    handleSubmit() {
      console.log("handleSubmit called");
      const formData = {
        // consignee: this.consignee,
        // phonenumber: this.phonenumber,
        // location: this.location,
        // detailedlocation: this.detailedlocation,
        // tags: [],

        addrDesc:this.location,
        addrUsername:this.consignee,
        addrPhone:this.phonenumber,
      };
      if (this.homeTags) formData.tags.push("Home");
      if (this.companyTags) formData.tags.push("Company");
      if (this.schoolTags) formData.tags.push("School");
      const token = localStorage.getItem("token");
      console.log(token);
      const config = {
        method: "post",
        url: `http://127.0.0.1:4523/m1/4275135-0-default/user/addAdd?adddes=${formData.addrDesc}&addname=${formData.addrUsername}&addphone=${formData.addrPhone}`,
        headers: {
          token: `${token}`,
          data: formData,
        },
      };

      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
        });
    },
    gotoaddr() {
      this.$router.push({ path: "/address" });
    },
  },
};
</script>
        
<style scoped lang="css">
.button_1 {
  margin-left: 25%;
  margin-top: 3rem;
  width: 40rem;
  height: 3rem;
  background-color: red;
  border-radius: 3rem;
  border: aliceblue;
  font-size: 1.3rem;
  color: white;
}
.group_1 {
  display: flex;
  flex-direction: column;
}
.group_2 {
  display: flex;
  flex-direction: row;
}
.group_3 {
  display: flex;
  flex-direction: row;
}
.group_4 {
  display: flex;
  flex-direction: column;
  height: 30rem;
  border-radius: 3rem;
  background-color: white;
}
.group_5 {
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid rgb(145, 144, 144);
  height: 6rem;
  margin-left: 3rem;
  margin-right: 3rem;
}
.group_6 {
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid rgb(145, 144, 144);
  height: 6rem;
  margin-left: 3rem;
  margin-right: 3rem;
}
.group_7 {
  display: flex;
  align-items: center;
  height: 6rem;
  margin-left: 3rem;
  margin-right: 3rem;
}
.image_1 {
  width: 60.15px;
  height: 46px;
}
.image_2 {
  width: 121px;
  height: 35px;
  margin-top: 11px;
  margin-left: 54.85px;
}
.image_3 {
  width: 296px;
  height: 37px;
  margin-left: 380px;
  margin-top: 11px;
}
.page {
  display: flex;
  flex-direction: columns;
  background-color: rgb(235, 235, 235);
}
.image_4 {
  width: 140px;
  height: 33px;
  margin-top: 50px;
}
.font_1 {
  font-size: 1.3rem;
  font-family: Montserrat;
  line-height: 0.97rem;
  font-weight: 600;
  color: #000000;
}
.font_2 {
  font-size: 1.2rem;
  font-family: Montserrat;
  line-height: 0.97rem;
  font-weight: 600;
  color: #6f6f6f;
}
.text_1 {
  width: 70rem;
  height: 4rem;
  border: aliceblue;
  margin-left: 3rem;
}
.text_2 {
  margin-left: 10rem;
  border: aliceblue;
}
input {
  outline: none;
  font-size: 1rem;
}
</style>
        
        