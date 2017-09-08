https://progblog.io/Angular-2-Firebase-Tutorial-Part-1-Create-a-Firebase-3-CRUD-app-with-Angular-CLI/


package com.example.muhammadimran.firebasedemo;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * Created by Muhammad Imran on 15-08-2017.
 */
public class Update_customer extends AppCompatActivity implements View.OnClickListener {

    Button submit_button;
    Button get_profit;

    EditText cus_name;
    EditText amt_received;
    EditText amt_spent;
    EditText tot_profit;
    EditText current_date;

    private DatabaseReference databaseReference;
    String currentDate;
    int count=0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_update_customer);

        submit_button = (Button) findViewById(R.id.submit_amount);
        submit_button.setOnClickListener(this);

        get_profit = (Button) findViewById(R.id.get_profit);
        get_profit.setOnClickListener(this);

         cus_name = (EditText) findViewById(R.id.cus_name);
         amt_received = (EditText) findViewById(R.id.amount_received);
         amt_spent = (EditText) findViewById(R.id.amount_spent);
         tot_profit = (EditText) findViewById(R.id.profit_amount);

        current_date = (EditText) findViewById(R.id.current_date);

        Date today = new Date();
        currentDate = new SimpleDateFormat("dd-MMM-yyyy").format(Calendar.getInstance().getTime());
        current_date.setText(currentDate);
    }

    @Override
    public void onClick(View v) {
        if (v == submit_button) {
            saveCustomerDetails();
        }
        else if(v == get_profit){
            getProfitAmount();
        }
    }

    public void saveCustomerDetails() {
        final String cusName = cus_name.getText().toString();
        final String amountReceived = amt_received.getText().toString();
        final String amountSpent = amt_spent.getText().toString();
        final String totalProfit = tot_profit.getText().toString();

        databaseReference = FirebaseDatabase.getInstance().getReference();

        databaseReference.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {

//                for(int i=1; i<2; i++) {
                    count = 2;

                    if (!dataSnapshot.child("HappYudesigners").child(String.valueOf(count)).exists()) {
                        databaseReference.child("HappYudesigners").child(String.valueOf(count)).child("name").setValue(cusName);
                        databaseReference.child("HappYudesigners").child(String.valueOf(count)).child("amt_rvd").setValue(amountReceived);
                        databaseReference.child("HappYudesigners").child(String.valueOf(count)).child("amt_spt").setValue(amountSpent);
                        databaseReference.child("HappYudesigners").child(String.valueOf(count)).child("final_prof").setValue(totalProfit);
                        databaseReference.child("HappYudesigners").child(String.valueOf(count)).child("date").setValue(currentDate);

                        Toast.makeText(getApplicationContext(), "Successfully Saved", Toast.LENGTH_SHORT).show();
                    }
              //  }
            }

            @Override
            public void onCancelled(DatabaseError databaseError) {

            }
        });
    }

    public void getProfitAmount(){
        String amountReceived = amt_received.getText().toString();
        String amountSpent = amt_spent.getText().toString();
        String totalProfit = tot_profit.getText().toString();

        int differenceAmount = Integer.parseInt(amountReceived) - Integer.parseInt(amountSpent) ;
        tot_profit.setText(String.valueOf(differenceAmount));
    }

}
