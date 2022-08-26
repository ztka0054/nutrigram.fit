import React from "react";

import FormDaysMenu from "./FormDaysMenu";

export default function ElementMenu({ element }) {
    return (
        <div className="col-12 sty-cont-form-1">
            <div className="row">
                <div className="col-6">
                    <div className="sty-dyna-title-1">
                        {element?.mealType?.name}
                    </div>
                </div>
            </div>
            <div className="sty-card-menu-days">
                <FormDaysMenu idRecipe={element?.monday} day={"monday"} />
                <FormDaysMenu idRecipe={element?.tuesday} day={"tuesday"} />
                <FormDaysMenu idRecipe={element?.wednesday} day={"wednesday"} />
                <FormDaysMenu idRecipe={element?.thursday} day={"thursday"} />
                <FormDaysMenu idRecipe={element?.friday} day={"friday"} />
                <FormDaysMenu idRecipe={element?.saturday} day={"saturday"} />
                <FormDaysMenu idRecipe={element?.sunday} day={"sunday"} />
            </div>
        </div>
    );
}
