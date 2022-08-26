const GetCase = (query) => {
    if (
        !query?.destination &&
        !query?.adventure &&
        !query?.activity &&
        !query?.date
    )
        return { case: 0, path: "/search" };
    else if (
        !query?.destination &&
        !query?.adventure &&
        !query?.activity &&
        query?.date
    )
        return { case: 1, path: "/search_date" };
    else if (
        query?.destination &&
        !query?.adventure &&
        !query?.activity &&
        !query?.date
    )
        return { case: 2, path: "/search_dest" };
    else if (
        query?.destination &&
        !query?.adventure &&
        !query?.activity &&
        query?.date
    )
        return { case: 3, path: "/search_dest_date" };
    else if (
        !query?.destination &&
        query?.adventure &&
        !query?.activity &&
        !query?.date
    )
        return { case: 4, path: "/search_adve" };
    else if (
        !query?.destination &&
        query?.adventure &&
        !query?.activity &&
        query?.date
    )
        return { case: 5, path: "/search_adve_date" };
    else if (
        !query?.destination &&
        !query?.adventure &&
        query?.activity &&
        !query?.date
    )
        return { case: 6, path: "/search_acti" };
    else if (
        !query?.destination &&
        !query?.adventure &&
        query?.activity &&
        query?.date
    )
        return { case: 7, path: "/search_acti_date" };
    else if (
        query?.destination &&
        !query?.adventure &&
        query?.activity &&
        !query?.date
    )
        return { case: 8, path: "/search_dest_act" };
    else if (
        query?.destination &&
        !query?.adventure &&
        query?.activity &&
        query?.date
    )
        return { case: 9, path: "/search_dest_act_date" };
    else if (
        query?.destination &&
        query?.adventure &&
        !query?.activity &&
        !query?.date
    )
        return { case: 10, path: "/search_dest_adv" };
    else if (
        query?.destination &&
        query?.adventure &&
        !query?.activity &&
        query?.date
    )
        return { case: 11, path: "/search_dest_adv_date" };
    else if (
        !query?.destination &&
        query?.adventure &&
        query?.activity &&
        !query?.date
    )
        return { case: 12, path: "/search_adve_act" };
    else if (
        !query?.destination &&
        query?.adventure &&
        query?.activity &&
        query?.date
    )
        return { case: 13, path: "/search_adve_act_date" };
    else if (
        query?.destination &&
        query?.adventure &&
        query?.activity &&
        !query?.date
    )
        return { case: 14, path: "/search_full" };
    else if (
        query?.destination &&
        query?.adventure &&
        query?.activity &&
        query?.date
    )
        return { case: 15, path: "/search_full_date" };
};

export default GetCase;
