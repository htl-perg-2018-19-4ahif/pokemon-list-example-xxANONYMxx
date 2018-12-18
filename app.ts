(async function() {
    const pokelist = await $.get('https://pokeapi.co/api/v2/pokemon/');


    let html = '';
    for(const pokemon of pokelist.results) {
        let pokeName = pokemon.name;
        let ability;

        html += `<li>${pokemon.name}</li>`
        html += `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#${pokemon.name}">
                Details ${pokemon.name}
                </button>`;


        html += `<div class="modal fade" id="${pokemon.name}" tabindex="-1" role="dialog" aria-labelledby="${pokemon.name}" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="${pokemon.name}">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                ${pokemon.url}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>`;
    }
    $('#pokemons')[0].innerHTML = html;

    /*for(const pokemon of pokelist.results){
        $(`#${pokemon.name}`).on('show.bs.modal', function (e) {
            alert();
            
            
            (async function() {
                const pokeDetails = await $.get('https://pokeapi.co/api/v2/pokemon/' + pokeName);

                for(const details of pokeDetails.results){
                    ability = details.abilities[0].name;
                }
            })();


        })
    }*/

})();




