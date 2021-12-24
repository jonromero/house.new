function main() {
    return {
        house_url: "",

        get_next_house: async function () {
            await fetch('https://us-central1-jonio-298206.cloudfunctions.net/return_new_house', {
                method: 'GET',
                headers: {
                },

            }).then(response => response.json()).then(response => {
                this.house_url = response['url'];
            });
        },
    }
}
