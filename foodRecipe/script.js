let searchInput  =document.getElementById("search-input")
let btnSearch  =document.getElementById("btn-search")
let mealContent  =document.getElementById("meal-content")
let mealList =document.getElementById("meal")
let closeBtn =document.getElementById("close-btn")
let getRacipe =document.getElementById("get-racipe-btn")




btnSearch.addEventListener("click" , getMealList)
closeBtn.addEventListener("click" , getDetails)

function getMealList(){
    let searchInput  =document.querySelector(".search-input").value.trim()
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}
    `)
    .then(response => response.json())
    .then(data => { 
        let html = ''
        if(data.meals){
            data.meals.forEach(meal => {
                html +=`
                <div class="recipe-items" data-id="${meal.idMeal}">
                    <div class="img">
                    <img src="${meal.strMealThumb}" alt="food" width="100%>
                        </div>
                    <div class="get-recipe">
                    <p class="category-name">"${meal.strMeal}"</p>
                    <button id="get-racipe-btn">Get Racipe</button>
                        </div>
                </div>
                `;
            });
        } else{
            html="sorry , we didn't find any meal"
            mealList.classList.add("not-found")
        }
            mealContent.innerHTML = html
    });
}

function getDetails(n){
    n.preventDefault();
    if(n.target.classList.contains("recipe-btn")){
        let mea
    }
}






