
export default function scontainer() {
    let scDiv=document.createElement("div")
    {
        scDiv.id="scDiv"
        
        let img=document.createElement("img")
        img.id="slideshow_container"
        img.src="https://imgs.search.brave.com/bOvle9X6A7sc0TYrluAPbBfjyV2ZBIzyxu6tsrfM-4w/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly9jZG4u/dm94LWNkbi5jb20v/dGh1bWJvci9HZkJP/bWRjUHBoNFI0MWFV/bzctcWI1TkxpaXM9/LzB4MDo2MDE2eDQw/MTYvMTIwMHg4MDAv/ZmlsdGVyczpmb2Nh/bCgyNTI3eDE1Mjc6/MzQ4OXgyNDg5KS9j/ZG4udm94LWNkbi5j/b20vdXBsb2Fkcy9j/aG9ydXNfaW1hZ2Uv/aW1hZ2UvNTE0MjAx/MDkvS0wyXzMxNTUu/MC5qcGc"

        let prev=document.createElement("a");
        let next=document.createElement("a");

        let i=0;

        prev.id="prev"
        prev.innerHTML="&#10094"
        prev.onclick=function(){--i;
            i<=0 ? i=0:""
            i==0 ? img.src="https://imgs.search.brave.com/bOvle9X6A7sc0TYrluAPbBfjyV2ZBIzyxu6tsrfM-4w/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly9jZG4u/dm94LWNkbi5jb20v/dGh1bWJvci9HZkJP/bWRjUHBoNFI0MWFV/bzctcWI1TkxpaXM9/LzB4MDo2MDE2eDQw/MTYvMTIwMHg4MDAv/ZmlsdGVyczpmb2Nh/bCgyNTI3eDE1Mjc6/MzQ4OXgyNDg5KS9j/ZG4udm94LWNkbi5j/b20vdXBsb2Fkcy9j/aG9ydXNfaW1hZ2Uv/aW1hZ2UvNTE0MjAx/MDkvS0wyXzMxNTUu/MC5qcGc":""
            i==1 ? img.src="https://imgs.search.brave.com/upyLFUMIrnTkp-4Br1_OBy50wjYOzantvC5yV05KEbI/rs:fit:1200:1200:1/g:ce/aHR0cDovL21vZGVy/bmxpdHRsZXZpY3Rv/cmllcy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMDcv/Ymx1ZWJlcnJ5cGFz/dHJ5LTcuanBn":""
            i==2 ? img.src="https://imgs.search.brave.com/IpareqqYAcGZyNNkCV63fEE0O72If8cyJ9ivpxIVPVg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9oZWFs/dGh5Zml0bmF0dXJh/bC5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTUvMTEvYmVz/dC1jb2ZmZWUuanBn":""
            i==3 ? img.src="https://imgs.search.brave.com/FBcgpAKEnD4UYPPZihVJ13jhIH3EfbAOiq3UDHiHqc4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dGhyaXZpbmdsb2Nh/bGx5LmNvbS9tZWRp/YS9Db2ZmZWVhbmRQ/YXN0cnkzLmpwZw":""

            console.log(i)
        }

        next.id="next"
        next.innerHTML="&#10095"
        next.onclick=function(){i++;
            i>=4 ? i=3:""
            i==1 ? img.src="https://imgs.search.brave.com/upyLFUMIrnTkp-4Br1_OBy50wjYOzantvC5yV05KEbI/rs:fit:1200:1200:1/g:ce/aHR0cDovL21vZGVy/bmxpdHRsZXZpY3Rv/cmllcy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMDcv/Ymx1ZWJlcnJ5cGFz/dHJ5LTcuanBn":""
            i==2 ? img.src="https://imgs.search.brave.com/IpareqqYAcGZyNNkCV63fEE0O72If8cyJ9ivpxIVPVg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9oZWFs/dGh5Zml0bmF0dXJh/bC5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTUvMTEvYmVz/dC1jb2ZmZWUuanBn":""
            i==3 ? img.src="https://imgs.search.brave.com/FBcgpAKEnD4UYPPZihVJ13jhIH3EfbAOiq3UDHiHqc4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dGhyaXZpbmdsb2Nh/bGx5LmNvbS9tZWRp/YS9Db2ZmZWVhbmRQ/YXN0cnkzLmpwZw":""

            console.log(i)
        }
        
        scDiv.append(img,prev,next)
    }
    document.body.append(scDiv)
}