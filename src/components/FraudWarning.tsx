import { AlertTriangle, Gavel, Calendar, Building2, Clock } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface ConvictedPerson {
  name: string;
  dob: string;
  sentence: string;
  offence: string;
  trial: number;
  directorBan?: string;
}

const convictedPersons: ConvictedPerson[] = [
  // Trial 1
  {
    name: "John Fenton",
    dob: "02/11/1957",
    sentence: "9 years imprisonment",
    offence: "Conspiracy to cheat the public revenue",
    trial: 1,
    directorBan: "10 years"
  },
  {
    name: "Neil Purcell",
    dob: "13/10/1964",
    sentence: "9 years imprisonment",
    offence: "Conspiracy to cheat the public revenue",
    trial: 1,
    directorBan: "14 years"
  },
  {
    name: "William Lindfield",
    dob: "11/07/1962",
    sentence: "7 years 6 months imprisonment",
    offence: "Conspiracy to cheat the public revenue",
    trial: 4,
  },
  {
    name: "Warren Bartlett",
    dob: "15/05/1974",
    sentence: "6 years 6 months imprisonment",
    offence: "Conspiracy to cheat the public revenue",
    trial: 3,
    directorBan: "10 years"
  },
  {
    name: "Leslie Thompson",
    dob: "25/07/1962",
    sentence: "6 years imprisonment",
    offence: "Conspiracy to cheat the public revenue",
    trial: 1,
    directorBan: "12 years"
  },
  {
    name: "Nigel Rush",
    dob: "12/01/1969",
    sentence: "6 years imprisonment",
    offence: "Conspiracy to cheat the public revenue",
    trial: 2,
    directorBan: "8 years"
  },
  {
    name: "Ian Dobson",
    dob: "13/08/1969",
    sentence: "5 years 9 months imprisonment",
    offence: "Conspiracy to cheat the public revenue",
    trial: 2,
    directorBan: "8 years"
  },
  {
    name: "Steven Moran",
    dob: "03/05/1968",
    sentence: "4 years 4 months imprisonment",
    offence: "Conspiracy to cheat the public revenue",
    trial: 1,
    directorBan: "12 years"
  },
  {
    name: "Stuart Ashmore",
    dob: "15/11/1952",
    sentence: "3 years 6 months imprisonment",
    offence: "Conspiracy to cheat the public revenue",
    trial: 1,
    directorBan: "6 years"
  },
  {
    name: "Vishal Chudsama",
    dob: "29/11/1982",
    sentence: "3 years 6 months imprisonment",
    offence: "Conspiracy to cheat the public revenue",
    trial: 4,
  },
  {
    name: "Darren Wright",
    dob: "17/07/1978",
    sentence: "3 years 6 months imprisonment",
    offence: "Conspiracy to cheat the public revenue",
    trial: 2,
    directorBan: "6 years"
  },
  {
    name: "Alec Leighton",
    dob: "07/11/1958",
    sentence: "2 years 9 months imprisonment",
    offence: "Conspiracy to cheat the public revenue",
    trial: 2,
    directorBan: "6 years"
  },
  {
    name: "Keith Shipton",
    dob: "N/A",
    sentence: "2 years 9 months imprisonment",
    offence: "Conspiracy to cheat the public revenue",
    trial: 2,
    directorBan: "6 years"
  },
  {
    name: "Beverley Thompson",
    dob: "22/12/1964",
    sentence: "2 years suspended",
    offence: "Money laundering",
    trial: 4,
  },
  {
    name: "Kashaf Bashier",
    dob: "04/02/1982",
    sentence: "23 months suspended",
    offence: "Conspiracy to cheat the public revenue",
    trial: 3,
  },
  {
    name: "Adeel Karamat Malik",
    dob: "14/02/1980",
    sentence: "23 months suspended",
    offence: "Conspiracy + money laundering",
    trial: 4,
  },
  {
    name: "Andrew Thompson",
    dob: "06/06/1984",
    sentence: "22 months suspended",
    offence: "Conspiracy to cheat the public revenue",
    trial: 3,
    directorBan: "8 years"
  },
  {
    name: "Sarah Jane Peploe",
    dob: "30/03/1971",
    sentence: "21 months suspended",
    offence: "Money laundering",
    trial: 4,
  },
  {
    name: "Rhys Reding",
    dob: "28/12/1980",
    sentence: "2 years suspended",
    offence: "Conspiracy to cheat the public revenue",
    trial: 3,
  },
];

const FraudWarning = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-destructive/5 via-destructive/10 to-background relative overflow-hidden">
      {/* Warning stripe pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--destructive)) 0, hsl(var(--destructive)) 10px, transparent 10px, transparent 20px)'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Warning Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-destructive/20 border-2 border-destructive/40 rounded-full px-6 py-3 mb-6 animate-pulse">
            <AlertTriangle className="h-6 w-6 text-destructive" />
            <span className="text-destructive font-bold uppercase tracking-wider text-sm">
              Official Warning • Real Consequences
            </span>
            <AlertTriangle className="h-6 w-6 text-destructive" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Fraud Has <span className="text-destructive">Real Consequences</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-4">
              The following individuals were convicted and sentenced at Southwark Crown Court for their roles in a sophisticated 
              <span className="text-destructive font-semibold"> £20 million VAT fraud</span> against UK taxpayers.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">20 October 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2">
                <Building2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">HMRC Investigation</span>
              </div>
              <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2">
                <Gavel className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">24 Defendants Tried</span>
              </div>
            </div>
          </div>
        </div>

        {/* Case Summary Card */}
        <div className="bg-card/80 backdrop-blur border border-destructive/30 rounded-2xl p-6 mb-10 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-destructive mb-3 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Case Overview: Winnington Networks VAT Fraud
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Between January 2011 and March 2014, a sophisticated "off-set" VAT fraud was operated through Winnington Networks Ltd. 
            VAT owed to HMRC from genuine trade in electrical goods and wholesale metals was fraudulently offset using fake trade 
            in Voice Over Internet Protocol airtime (VOIP), resulting in <span className="text-destructive font-semibold">£20 million 
            stolen from UK public services</span>. Covert recordings of conspirators' meetings in Birmingham and Manchester were 
            key evidence in the prosecution.
          </p>
        </div>

        {/* Scrollable Convicted Persons */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-destructive/50 to-transparent flex-1 max-w-32" />
            <span className="text-sm font-semibold text-destructive uppercase tracking-wider">
              Scroll to view all convicted individuals →
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-destructive/50 to-transparent flex-1 max-w-32" />
          </div>
          
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-4 pb-4">
              {convictedPersons.map((person, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-72 bg-card border-2 border-destructive/20 hover:border-destructive/50 rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-destructive/10 group"
                >
                  {/* Header with Trial Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-destructive/10 rounded-full px-3 py-1">
                      <span className="text-xs font-bold text-destructive">Trial {person.trial}</span>
                    </div>
                    <Gavel className="h-5 w-5 text-destructive/60 group-hover:text-destructive transition-colors" />
                  </div>
                  
                  {/* Name */}
                  <h4 className="text-lg font-bold text-foreground mb-1 whitespace-normal">
                    {person.name}
                  </h4>
                  
                  {/* DOB */}
                  <p className="text-xs text-muted-foreground mb-3">
                    DOB: {person.dob}
                  </p>
                  
                  {/* Sentence - highlighted */}
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg px-3 py-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-destructive flex-shrink-0" />
                      <span className="text-sm font-bold text-destructive whitespace-normal">
                        {person.sentence}
                      </span>
                    </div>
                  </div>
                  
                  {/* Offence */}
                  <p className="text-xs text-muted-foreground mb-2 whitespace-normal">
                    <span className="font-semibold">Offence:</span> {person.offence}
                  </p>
                  
                  {/* Director Ban if applicable */}
                  {person.directorBan && (
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
                      <Building2 className="h-4 w-4 text-amber-500" />
                      <span className="text-xs text-amber-600 font-medium">
                        Director ban: {person.directorBan}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        {/* Quote from authorities */}
        <div className="max-w-4xl mx-auto bg-primary/5 border border-primary/20 rounded-2xl p-6 mt-8">
          <blockquote className="text-center">
            <p className="text-lg italic text-foreground mb-4">
              "Tax fraud is not a victimless crime. It steals money that funds the public services we all rely on... 
              regardless of how complex it may be, we have the skills, resources and the determination to catch you 
              and to bring you to justice."
            </p>
            <footer className="text-sm text-muted-foreground">
              — <cite className="font-semibold not-italic text-primary">Richard Las</cite>, Director of HMRC's Fraud Investigation Service
            </footer>
          </blockquote>
        </div>

        {/* CTA Warning */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-2">
            Don't let your organisation become the next case study.
          </p>
          <p className="text-lg font-semibold text-primary">
            Protect yourself with proper fraud prevention procedures today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FraudWarning;
