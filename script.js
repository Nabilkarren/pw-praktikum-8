
filter(null)

function filter(key){

    $.getJSON('menu.json', function(data) {
        let menu = data.menu;
        console.log(data);

        $('.nav-link').on("click", function(){
            $('.nav-link').removeClass("active");
            $(this).addClass("active");
        });

        if(key){
            menu = menu.filter(function(value){
                return value.jenis === key;
            });
        }
    
        $('#catalogue')
            .empty()
            .append(
                menu.map(function(each){
                    return `
                    <div class="col-md-4">
                        <div class="card mb-3" style="height: 27.5vw; object-fit: cover;">
                            <img src="${each.gambar}" class="card-img-top" >
                            <div class="card-body">
                                <h3 class="card-title">${each.nama}</h3>
                                <p class="card-text">${each.deskripsi}</p>
                                <h5 class="card-text">Rp. ${each.harga}</h5>
                                <p class="card-text">Estimasi : ${each.estimasi}</p>
                                <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                            </div>
                        </div>
                    </div>`;
                })
            );       
    }); 

}
