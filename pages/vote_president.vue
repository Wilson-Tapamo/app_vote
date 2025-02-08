<template>
    <h1 class="font-bold text-3xl text-center">Bienvenue sur la plateforme de vote de l’AP-PNUDM</h1>

    <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow  flex  flex-1 self-center w-full shadow-xl">
      <div class="max-w-xl m-2 bg-white p-8  rounded-lg">
        <h1 class="">Sélectionnez votre candidat puis, cliquez sur suivant.</h1>
        <form @submit.prevent="submitVote">
          <div class="space-y-4">
            <div class="flex items-center">
                <span class="circle"></span>
              <label for="candidate1" class="ml-2 text-lg">Candidat 1</label>
              <input
                v-model="selectedCandidate"
                type="radio"
                id="candidate1"
                value="candidate1"
                name="president"
                class="h-5 w-5 text-blue-600"
              />
              
            </div>
          </div>
  
          <button
            type="submit"
            class="mt-6 w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Vote
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    setup() {
        const selectedCandidate = ref('')

        const submitVote = () => {
            if (this.selectedCandidate) {
        alert(`Vote submitted for: ${this.selectedCandidate}`)
      } else {
        alert('Please select a candidate')
      }
        }
        return {
            selectedCandidate,
            submitVote
        }
    }
}
  </script>
<style>
.circle{
    width:70px;
    height:70px;
    border-radius: 50%;
    background-color:green;
    border:1px solid silver;
}
</style>
  