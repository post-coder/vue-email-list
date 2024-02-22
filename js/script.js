const {createApp} = Vue;
createApp({
    data(){
        return {
            mails: [],

            API_KEY: '',
            API_URL: 'https://api.openai.com/v1/chat/completions',












            message: '',

            result: '',


            isLoading: false,
        }
    },

    mounted() {


        // for(let i = 0; i < 10; i++) {

        //     axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((result) => {

        //         console.log(result.data.response)

        //         // this.mail = result.data.response;
        //         this.mails.push(result.data.response)
        //     })

        // }
        

    },

    async created() {
    },

    methods: {

        generate : async function() {
            this.isLoading = true;

            try {
                // Fetch the response from the OpenAI API with the signal from AbortController
                const response = await fetch(this.API_URL, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.API_KEY}`,
                  },
                  body: JSON.stringify({
                    model: "gpt-4-1106-preview",
                    messages: [{ role: "user", content: `${this.message}, converti la risposta in sintassi HTML!` }],
                  }),
                });
            
                const data = await response.json();
                this.result = data.choices[0].message.content;

                this.isLoading = false;
            } catch (error) {
                console.error("Error:", error);
                this.result = "Error occurred while generating.";
            }
        }

    },
}).mount('#app')