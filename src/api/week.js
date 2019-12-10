import http from "@utils/http";

//week_choice
export const week_choice = (city_id=140,page=0)=>http.get("/api/hub/home/v1/web/week_choice.json",{city_id,page}) 
//菜品类型
export const goodsTypes = ()=>http.get("/cdn/home/djEvdmlydHVhbC9pbl9jYXRlZ29yeS5qc29uP2NpdHlfaWQ9MTQwJmlzX25ld19sb2NhbD1mYWxzZSZtZDU9MTg2ZTliNTdjZjYwODE3MTVmNjgyNzIwYjZmZGY3N2UmMjAxOTA4MjYxMTAw.json");

export const a = ()=>http.get("Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=20191291048036362");

export const b = ()=>http.post("/Service/callback.mi/Showtime/HotCitiesByCinema.api?t=20191291048079252");

export const c = ()=>http.post("/Service/callback.mi/Showtime/HotCitiesByCinema.api?t=20191291048079252");

export const d = ()=>http.post("/Service/callback.mi/Showtime/HotCitiesByCinema.api?t=20191291048079252");


