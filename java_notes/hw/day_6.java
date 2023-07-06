// ? Parent class and child class  1.  instance variable (2)  2.  instance method  3. constructor (2)

class Vehicle {
    private static int vehicle_number = 1;

    String reg_no;
    String fuel_type;

    {
        // System.out.println("Registring a new vehicle");
        this.reg_no = "VH_00" + vehicle_number;
        Vehicle.vehicle_number += 1;
    }
}

class Car extends Vehicle {

    String model;
    String company;
    boolean isCarStarted = false;
    int distance_travelled = 0;

    Car() {
        company = "ABC";
        fuel_type = "petrol";
        model = "XYZ";
    }

    Car(String company, String model, String fuel_type) {
        this.company = company;
        this.fuel_type = fuel_type;
        this.model = model;
    }

    void printInfo() {
        System.out.println("\n-----------------------------------------------");
        System.out.println("Car model : " + this.model);
        System.out.println("Company of Car: " + this.company);
        System.out.println("Fuel Type: " + this.fuel_type);
        System.out.println("Distance Travelled (odometer reading) : " + this.distance_travelled + " kms");
        System.out.println("Registration Number : " + this.reg_no);
        System.out.println("-----------------------------------------------\n");
    }

    void start() {
        this.isCarStarted = true;
    }

    void drive(int kms) {
        if (isCarStarted) {
            System.out.println("Drove " + kms + " kms");
            this.distance_travelled += kms;
        } else {
            System.out.println("Please start car before use");
        }
    }

    void stop() {
        this.isCarStarted = false;
        System.out.println("Parking " + this.model);
    }
}

public class Program {
    public static void main(String[] args) {

        Car myFirstCar = new Car();
        myFirstCar.start();
        myFirstCar.drive(10);
        myFirstCar.stop();

        Car mySecondCar = new Car("Audi", "Q7", "diesel");
        mySecondCar.start();
        mySecondCar.drive(20);
        mySecondCar.stop();

        System.out.println("\n\nPrinting information about my cars");
        myFirstCar.printInfo();
        mySecondCar.printInfo();
    }
}