import moment from 'moment'
import { Router } from '../../routes'
var slug = require('slug')

export default (lang, selectNameDestination, selectNameAdventure, selectNameActivity, selectDate) => {
    if(selectNameDestination== null && 
        selectNameAdventure==null && 
        selectNameActivity==null && 
        selectDate==null
    ){
        Router.pushRoute('search', {
            lang, 
        })
    }
    if(selectNameDestination== null && 
        selectNameAdventure==null && 
        selectNameActivity==null && 
        selectDate!=null
    ){
        Router.pushRoute('search_date', {
            lang, 
            date: moment(selectDate).format('YYYY-MM-DD')
        })
    }

    if(selectNameDestination!= null && 
        selectNameAdventure==null && 
        selectNameActivity==null && 
        selectDate==null
    ){
        Router.pushRoute('search_destination', {
            lang, 
            destination: slug(selectNameDestination)
        })
    }
    if(selectNameDestination!= null && 
        selectNameAdventure==null && 
        selectNameActivity==null && 
        selectDate!=null
    ){
        Router.pushRoute('search_destination_date', {
            lang, 
            destination: slug(selectNameDestination),
            date: moment(selectDate).format('YYYY-MM-DD')
        })
    }


    if(selectNameDestination== null && 
        selectNameAdventure!=null && 
        selectNameActivity==null && 
        selectDate==null
    ){
        Router.pushRoute('search_only_adventure', {
            lang, 
            adventure: slug(selectNameAdventure)
        })
    }
    if(selectNameDestination== null && 
        selectNameAdventure!=null && 
        selectNameActivity==null && 
        selectDate!=null
    ){
        Router.pushRoute('search_only_adventure_date', {
            lang,
            adventure: slug(selectNameAdventure),
            date: moment(selectDate).format('YYYY-MM-DD')
        })
    }

    if(selectNameDestination!= null && 
        selectNameAdventure!=null && 
        selectNameActivity==null && 
        selectDate==null
    ){
        Router.pushRoute('search_adventure', {
            lang, 
            destination: slug(selectNameDestination),
            adventure: slug(selectNameAdventure)
        })
    }
    if(selectNameDestination!= null && 
        selectNameAdventure!=null && 
        selectNameActivity==null && 
        selectDate!=null
    ){
        Router.pushRoute('search_adventure_date', {
            lang, 
            destination: slug(selectNameDestination),
            adventure: slug(selectNameAdventure),
            date: moment(selectDate).format('YYYY-MM-DD')
        })
    }

    if(selectNameDestination== null && 
        selectNameAdventure==null && 
        selectNameActivity!=null && 
        selectDate==null
    ){
        Router.pushRoute('search_only_activity', {
            lang, 
            activity: slug(selectNameActivity),
        })
    }
    if(selectNameDestination== null && 
        selectNameAdventure==null && 
        selectNameActivity!=null && 
        selectDate!=null
    ){
        Router.pushRoute('search_only_activity_date', {
            lang,
            activity: slug(selectNameActivity),
            date: moment(selectDate).format('YYYY-MM-DD')
        })
    }

    if(selectNameDestination!= null && 
        selectNameAdventure==null && 
        selectNameActivity!=null && 
        selectDate==null
    ){
        Router.pushRoute('search_destination_activity', {
            lang, 
            destination: slug(selectNameDestination),
            activity: slug(selectNameActivity),
        })
    }
    if(selectNameDestination!= null && 
        selectNameAdventure==null && 
        selectNameActivity!=null && 
        selectDate!=null
    ){
        Router.pushRoute('search_destination_activity_date', {
            lang,
            destination: slug(selectNameDestination),
            activity: slug(selectNameActivity),
            date: moment(selectDate).format('YYYY-MM-DD')
        })
    }

    if(selectNameDestination== null && 
        selectNameAdventure!=null && 
        selectNameActivity!=null && 
        selectDate==null
    ){
        Router.pushRoute('search_adventure_activity', {
            lang, 
            adventure: slug(selectNameAdventure),
            activity: slug(selectNameActivity),
        })
    }
    if(selectNameDestination== null && 
        selectNameAdventure!=null && 
        selectNameActivity!=null && 
        selectDate!=null
    ){
        Router.pushRoute('search_adventure_activity_date', {
            lang,
            adventure: slug(selectNameAdventure),
            activity: slug(selectNameActivity),
            date: moment(selectDate).format('YYYY-MM-DD')
        })
    }

    if(selectNameDestination!= null && 
        selectNameAdventure!=null && 
        selectNameActivity!=null && 
        selectDate==null
    ){
        Router.pushRoute('search_activity', {
            lang, 
            destination: slug(selectNameDestination),
            adventure: slug(selectNameAdventure),
            activity: slug(selectNameActivity),
        })
    }
    if(selectNameDestination!= null && 
        selectNameAdventure!=null && 
        selectNameActivity!=null && 
        selectDate!=null
    ){
        Router.pushRoute('search_all', {
            lang, 
            destination: slug(selectNameDestination),
            adventure: slug(selectNameAdventure),
            activity: slug(selectNameActivity),
            date: moment(selectDate).format('YYYY-MM-DD')
        })
    }
}