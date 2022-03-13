import {UniversityTeacher} from "./mixins";
import './declaration-merging';

function declarationMerging() {
    let universityTeacher = new UniversityTeacher();
    universityTeacher.phone;
    universityTeacher.research('');
}