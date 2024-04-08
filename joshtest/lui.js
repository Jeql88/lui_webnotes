const {createClient} = supabase

const supabase_url = "https://wwdaochdkrdaumjuwdxc.supabase.co"
const supabase_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3ZGFvY2hka3JkYXVtanV3ZHhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxMTM2ODgsImV4cCI6MjAyNzY4OTY4OH0.jmeSsVO6kG3F5Uthc4JfjzCxpjHXAzzZyvW-3J9cMLo"

const connection = createClient(supabase_url, supabase_key) 
console.log(connection)
// setTimeout(function(){
//     console.log("2")
// },5000)
// setTimeout(function(){
//     console.log(4)},5000)


async function readData(){
    
    
    let data = await connection.from('faculty_table').select()
    if (document.querySelector('#department').checked){
        data = await connection.from('faculty_table').select().eq('department','DCISM')
    }
    if (document.querySelector('#age_filter').checked){
        const age_limit = document.querySelector('#age').value
        data = await connection.from('faculty_table').select().gt('age',age_limit)
        console.log(data.data)
    }
    console.log(data)
    for (let i = 0; i < data.data.length; i++) {
        const list = document.querySelector('.return_list')
        let list_item = document.createElement("li");
        list_item.textContent = data.data[i].name;
        list.appendChild(list_item)
    }
   
}
// console.log(1)
// console.log(3)