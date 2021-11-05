import { Footer } from "./footer/footer.js";
import { Header } from "./header/header.js"
import {AttractionList} from "./attractions/AttractionList.js"
import {AttractionSelect} from "./attractions/AttractionSelect.js"
import { parkList } from "./parks/ParkList.js"
import { parkSelect } from "./parks/ParkSelect.js"
import { EateryList } from "./eateries/EateryList.js"
import { EaterySelect } from "./eateries/EaterySelect.js"
import {ADetailButton} from "./attractions/AttractionDetail.js"
import { detailButton } from "./parks/ParkDetail.js"
import { deatilButton } from "./eateries/EateryDeatil.js";
import { ItineraryForm } from "./itinerary/ItineraryForm.js";
import { ItineraryList } from "./itinerary/ItineraryList.js";




Header();
Footer();

AttractionSelect();

parkSelect();
EaterySelect();
ItineraryForm();

 
