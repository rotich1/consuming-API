import { Pipe, PipeTransform } from '@angular/core';
import { SearchGithubService } from './search-github.service';
import { User } from './user';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  user: User;
  searchGithubService: SearchGithubService;

  transform(hireable: boolean): any {
    if (this.user.hireable==true) {
      return "Hireable";
    }else if(this.user.hireable==false){
      return "Not hireable";
    } else if (this.user.hireable===null){
      return "Hireability status unknown";
    }else{
      return 0;
    }
  }
}
