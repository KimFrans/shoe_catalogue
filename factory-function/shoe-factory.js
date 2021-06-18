function shoeCatalogue(){

    var shoes = [{shoe:"https://assets.superbalistcdn.co.za/142x206/filters:quality(75):format(jpg)/1671964/original.jpg", brand:"nike", size:"3", color:"red", stock:"10", price:"1200"},
    {shoe:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMHatp10ZYxMtQOH4auKcQTDeHUGtrJkuPTLhlKcpczG49NMIU8nZd7aLzFoXLXw6N0oA&usqp=CAU", brand:"nike", size:"5", color:"white", stock:"10", price:"1500"}, 
    {shoe:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR56oShDk2kxpokowTI9m5YVezTLWFBotGiNrvL_ANCAzvqq7O4jnHgEETEGERJittKHlQ&usqp=CAU", brand:"nike", size:"7", color:"blue", stock:"15", price:"1200"},
    {shoe:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqyN_dIe6UzsVdvhP_sbfuXPSAaoLMrCaeopg-JuCy3H7wA5Kn6qBIiWnsRQHL6pwlxos&usqp=CAU", brand:"nike", size:"4", color:"pink", stock:"20", price:"1800"},
    {shoe:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGFfc-Hu50o5FLJiCJQOB-b39s2buBO7syw&usqp=CAU", brand:"adidas", size:"8", color:"black", stock:"15", price:"1000"},
    {shoe:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRou_GtKVhIEmCuTbqoqnTExGftlhPT4GGwQIcw7nhZh2UK7QQD6E117u5rjZUfQ6NjP_g&usqp=CAU", brand:"adidas", size:"6", color:"grey", stock:"10", price:"1100"},
    {shoe:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmcWES6CVPLDm3V6Rd5cjuZQ9eHZW61stztFDeekk5oGHrIRfHTV7DjGelovWgB5z2UDI&usqp=CAU", brand:"adidas", size:"8", color:"yellow", stock:"10", price:"1200"},
    {shoe:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg7_XbkxY34nzIiOsKyZqI7JP8t0O8G4t2rJaSTghDTuyUvuPH8WT_6ctphMXP0JRI1rA&usqp=CAU", brand:"adidas", size:"2", color:"white", stock:"10", price:"900"},
    {shoe:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwc_h6vhVIYfUeYFEO7a6o5IUilpVrGS1sGxMZoSdtvM9MvcwION-1R13ADTA1mGxQaaY&usqp=CAU", brand:"vans", size:"5", color:"black", stock:"15", price:"900"},
    {shoe:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyu3qT-P2W9wqeLwhY6KVzVSLoI0u6Wfwigv9yUGJsFBpPRiimjocqHIQuXzpzbHR85iA&usqp=CAU", brand:"vans", size:"8", color:"red", stock:"10", price:"700"},
    {shoe:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsXtZvJhIMh13JbTiCfGgfUHYY8AVOhdk1SBEPGipDKXWebFPsnjPnwxROtxsPAwwD0Y&usqp=CAU", brand:"vans", size:"6", color:"yellow", stock:"10", price:"600"},
    {shoe:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNfxVt-Cza-LZ84agnAzUN7J9k9RVWAvYHQyBabD65eSZnbaVbluvfUH5aElwI8Q-_bSE&usqp=CAU", brand:"vans", size:"7", color:"blue", stock:"10", price:"600"},
    {shoe:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ0qT2Et0qjKsP3jjP_EGOzJy76tqrSzs1fGKzXt7lpQORW5HLGzYrC8EfgM-I7Aaem3o&usqp=CAU", brand:"converse", size:"4", color:"white", stock:"15",price:"600"},
    {shoe:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUOIzl7PEZMbIeYy3ls8Hvfu1CCmzWe4z-Eg&usqp=CAU", brand:"converse", size:"3", color:"blue", stock:"10", price:"700"},
    {shoe:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY3QsIU2Fd-HZz9gVW7OPzxd9_3zxXTq5mzcdUYLc78mIRkdusVJ3zFljVozLcduC9gs&usqp=CAU", brand:"converse", size:"4", color:"red", stock:"10", price:"500"},
    {shoe:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBt7UPV-4YMYObkap998xI041m8R3fAgzxjb2XWyIgiOKLIeiTyqJpMgT2dZaSCwPqH3g&usqp=CAU", brand:"converse", size:"7", color:"yellow", stock:"10", price:"600"},
    {shoe:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcUSBXVOHI-gAtAd3lL33BGRCJO0MM13DVeZN9REjxt0e8z-JpnHmucocxs3ykyE4YClc&usqp=CAU", brand:"jordan", size:"3", color:"white", stock:"15", price:"1400"},
    {shoe:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_oFvthz3v4X4cCNjbwRDiAAEqZXiaUH54ynXygsT0hxEA9qH-fkdyrF07s_O6vy8Q5E&usqp=CAU", brand:"jordan", size:"8", color:"black", stock:"10", price:"1300"},
    {shoe:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ePp1xFTDSOhXLAdu-hoHjbyaoNH8aKpSHrPQjRxDBT7JHb2WBpTgUGo55enrWDmjKIo&usqp=CAU", brand:"jordan", size:"5", color:"grey", stock:"15", price:"1500"},
    {shoe:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDGILtFg2jC8Yt_NT7GWYamplrCJbTo5ilhYNYVQ-94VftzXcZ1_54BEcpabzf8WpSJj4&usqp=CAU", brand:"jordan", size:"2", color:"pink", stock:"10", price:"1200"}];

    var noMatch = ""


    function getShoes(){
        return shoes
    }

    function filterShoeBrands(brand, size, color){
        var shoeFilter = shoes.filter(function (currentElement){
           return currentElement.brand == brand && currentElement.size == size && currentElement.color == color
           
        });
        
        // if(shoeFilter === []){
        //     noMatch = "There are no shoes in this catalogue that match your search"
        // }

        console.log(shoeFilter)
        return shoeFilter
        
    }

    function values(){
        return{
            shoeObj: shoes,
            noMatchMessage : noMatch,
        }
    }
    
    return{
        values,
        getShoes,
        filterShoeBrands,
    }

}