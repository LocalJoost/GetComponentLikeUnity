import { MyBaseClass } from "./MyBaseClass";
import { getComponent } from "LocalJoost/Utilities/SceneUtils";

@component
export class TestScript extends BaseScriptComponent {
    @input prefab : ObjectPrefab;
   
    onAwake() {
        var instance = this.prefab.instantiate(this.getSceneObject());
        var getComponentResult = instance.getComponent(MyBaseClass.getTypeName()) as MyBaseClass;
        print("getComponentByClass: " + (getComponentResult != null));

        var findScriptComponentResult = getComponent<MyBaseClass>(instance, MyBaseClass);
        print("findScriptComponentByClass: " + (findScriptComponentResult != null));
        findScriptComponentResult.hello();
    }
}
