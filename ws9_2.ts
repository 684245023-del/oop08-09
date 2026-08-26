interface StorageService{
    save(data:string):void;
    load():string;
}
class CloudStotage implements StorageService{
        private _data:string="";
        save(data:string):void{
            this._data = data;
        }
        load():string{
            return this._data;
        }
}
const storage1 =new CloudStotage();
storage1.save("sdgdsg fi nng ifg nfognfgofndog gsgsg dssd f ddfsfdsfdfsdff");
storage1.load();
console.log(storage1.load());