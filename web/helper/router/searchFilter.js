import Router from "next/router";
import { size } from "lodash";
var slug = require("slug");

const routerSearch = (locale, destination, adventure, activity, date) => {
    if (
        destination == null &&
        adventure == null &&
        activity == null &&
        date == null
    ) {
        linksSearch("/search", locale);
    } else if (
        destination == null &&
        adventure == null &&
        activity == null &&
        date != null
    ) {
        linksSearch("/search_date", locale, [date]);
    } else if (
        destination != null &&
        adventure == null &&
        activity == null &&
        date == null
    ) {
        linksSearch("/search_dest", locale, [
            destination.id,
            slug(destination.name),
        ]);
    } else if (
        destination != null &&
        adventure == null &&
        activity == null &&
        date != null
    ) {
        linksSearch("/search_dest_date", locale, [
            destination.id,
            slug(destination.name),
            date,
        ]);
    } else if (
        destination != null &&
        adventure != null &&
        activity == null &&
        date == null
    ) {
        linksSearch("/search_dest_adv", locale, [
            destination.id,
            adventure.id,
            slug(destination.name),
            slug(adventure.name),
        ]);
    } else if (
        destination != null &&
        adventure != null &&
        activity == null &&
        date != null
    ) {
        linksSearch("/search_dest_adv_date", locale, [
            destination.id,
            adventure.id,
            slug(destination.name),
            slug(adventure.name),
            date,
        ]);
    } else if (
        destination != null &&
        adventure == null &&
        activity != null &&
        date == null
    ) {
        linksSearch("/search_dest_act", locale, [
            destination.id,
            activity.id,
            slug(destination.name),
            slug(activity.name),
        ]);
    } else if (
        destination != null &&
        adventure == null &&
        activity != null &&
        date != null
    ) {
        linksSearch("/search_dest_act_date", locale, [
            destination.id,
            activity.id,
            slug(destination.name),
            slug(activity.name),
            date,
        ]);
    } else if (
        destination == null &&
        adventure != null &&
        activity == null &&
        date == null
    ) {
        linksSearch("/search_adve", locale, [
            adventure.id,
            slug(adventure.name),
        ]);
    } else if (
        destination == null &&
        adventure != null &&
        activity == null &&
        date != null
    ) {
        linksSearch("/search_adve_date", locale, [
            adventure.id,
            slug(adventure.name),
            date,
        ]);
    } else if (
        destination == null &&
        adventure != null &&
        activity != null &&
        date == null
    ) {
        linksSearch("/search_adve_act", locale, [
            adventure.id,
            activity.id,
            slug(adventure.name),
            slug(activity.name),
        ]);
    } else if (
        destination == null &&
        adventure != null &&
        activity != null &&
        date != null
    ) {
        linksSearch("/search_adve_act_date", locale, [
            adventure.id,
            activity.id,
            slug(adventure.name),
            slug(activity.name),
            date,
        ]);
    } else if (
        destination == null &&
        adventure == null &&
        activity != null &&
        date == null
    ) {
        linksSearch("/search_acti", locale, [activity.id, slug(activity.name)]);
    } else if (
        destination == null &&
        adventure == null &&
        activity != null &&
        date != null
    ) {
        linksSearch("/search_acti_date", locale, [
            activity.id,
            slug(activity.name),
            date,
        ]);
    } else if (
        destination != null &&
        adventure != null &&
        activity != null &&
        date == null
    ) {
        linksSearch("/search_full", locale, [
            destination.id,
            adventure.id,
            activity.id,
            slug(destination.name),
            slug(adventure.name),
            slug(activity.name),
        ]);
    } else if (
        destination != null &&
        adventure != null &&
        activity != null &&
        date != null
    ) {
        linksSearch("/search_full_date", locale, [
            destination.id,
            adventure.id,
            activity.id,
            slug(destination.name),
            slug(adventure.name),
            slug(activity.name),
            date,
        ]);
    }
};

export default routerSearch;

const linksSearch = (pathname, locale, params = []) => {
    let string = "";
    if (size(params) > 0) {
        string = params.join("/");
        string = `/${string}`;
    }

    Router.push(`${pathname}${string}`, `${pathname}${string}`, {
        locale,
    });
};
