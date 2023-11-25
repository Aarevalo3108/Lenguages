#include <iostream>
using namespace std;
int main(){
    int N, P, cont, V, F;
    bool Ps, Pn;
    cout<<" Calculadora de numeros primos \n cuantos valores desea probar?: "
    cin>>V;
    while(V){
        cout<<"Ingrese un numero: "
        cin>>N;
        for(int i=2,;i<N;i++){
            if(N%i=0)&&(cont<1){
                cont++;
            }
        }
        cout<<" "<<N;
        if(cont==1)
            cout<<" es un numero primo.";
        if(cont!=1)
            cout<<" no es un numero primo.";
        cout<<"\n Desea terminar terminar antes? Presione 0 si asi lo desea: "
        cin>>F;
        if(F==0)
            break;
        V--;
    }
}