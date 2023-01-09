using Assignment;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment
{
    interface DatabaseContainer
    {
        void AddDiseaseDetails(Diseases d);
        void GetAllSymptomsToDisease(Diseases d);
        object GetAllSymptomsToDisease();
    }

    class Diseases
    {
        public string Disease { get; set; }
        public string Symptoms { get; set; }
        public string Range { get; set; }
        public string Patient { get; set; }

       // public abstract void CalculateSymptoms();

    }


   /* class Malaria : Diseases
    {
        public override void CalculateSymptoms()
        {
            int Range=0;
           
            Console.WriteLine("Enter the temperature");
            Console.WriteLine("Enter the disease");
            Range = Convert.ToInt32(Console.ReadLine());
            if(Range<90)
            {
                Console.WriteLine("Normal Fever");

            }
            else if(Range>90)
            {
                Console.WriteLine("High Fever");
            }

            else if(Range>120)
            {
                Console.WriteLine("Malaria fever");
            }
        }
    }

    class chickenpox : Diseases
    {
        public override void CalculateSymptoms()
        {
            int Range = 0;
            Console.WriteLine("Enter the temperature");
            Console.WriteLine("Enter the disease");
            Range = Convert.ToInt32(Console.ReadLine());
       


        }
    }

    class cholera : Diseases
    {
        public override void CalculateSymptoms()
        {


        }
    }


    */


    class DiseaseDatabase : DatabaseContainer
    {
        private ArrayList _listOfDiseases = new ArrayList();
        

        public void AddDiseaseDetails(Diseases d)
        {
            _listOfDiseases.Add(d);
        }





        public Array GetAllSymptomsToDisease(Diseases d)
        {

            Diseases[] array = new Diseases[_listOfDiseases.Count];
            for(int i=0;i<_listOfDiseases.Count;i++)
            {
                if(_listOfDiseases[i] is Diseases)
                {
                    array[i] = _listOfDiseases[i] as Diseases;
                }
            }
            return array;
        
        }

        public object GetAllSymptomsToDisease()
        {
            throw new NotImplementedException();
        }

        void DatabaseContainer.GetAllSymptomsToDisease(Diseases d)
        {
            throw new NotImplementedException();
        }

        enum Fever { Malaria, chickenpox , cholera};
       class Program
        {
            static DatabaseContainer container = new DiseaseDatabase();

            static void Main(string[] args)

            {
                Console.WriteLine("Enter the name of the fever");
                Array PossibleFever = Enum.GetValues(typeof(Fever));
               for(int i=0;i<PossibleFever.Length;i++)
                {
                    Console.WriteLine(PossibleFever.GetValue(i));
                }


                var v = container.GetAllSymptomsToDisease();
                foreach(var i in v)
                {
                    var l =i as Diseases;
                    Console.WriteLine(l);

                }
                string DiseaseType = Console.ReadLine();

                container.AddDiseaseDetails(new Diseases { Disease = "Malaria" , Symptoms="fever", Range ="high", Patient ="abc"});
                container.AddDiseaseDetails(new Diseases { Disease = "chickenpox", Symptoms = "fever", Range = "Medium", Patient = "def" });

                
                    



               



                }

        }
    }
}
    
    

