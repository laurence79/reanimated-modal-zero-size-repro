//
//  ReactNativeViewController.m
//  ModalRepro
//
//  Created by Laurence Hartgill on 05/09/2024.
//

#import "ReactNativeViewController.h"
#import "AppDelegate.h"

@interface ReactNativeViewController ()

@end

@implementation ReactNativeViewController

+ (UIView *)rootViewForEntryPoint:(NSString *)moduleName {
  AppDelegate * appDelegate = (AppDelegate *)[UIApplication sharedApplication].delegate;
    
  UIView *rootView = [appDelegate.host viewWithModuleName:moduleName initialProperties:nil];
    
  [rootView setBackgroundColor:[UIColor blackColor]];
  
  return rootView;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}

- (void)setEntryPoint:(NSString *)entryPoint {
  UIView *rootView = [ReactNativeViewController rootViewForEntryPoint:entryPoint];
  
  self.view = rootView;
}

@end
